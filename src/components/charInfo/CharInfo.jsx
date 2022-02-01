import { Component } from 'react';

import MarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {

   state = {
      char: null,
      loading: false,
      error: false
   }

   marvelService = new MarvelServices();

   componentDidMount() {
      this.updateChar();
   }

   componentDidUpdate(prevProps){
      if (this.props.charId !== prevProps.charId) {
         this.updateChar();
      }
   }

   updateChar = () => {
      const {charId} = this.props;
      if (!charId) {
         return;
      }

      this.onCharLoading();

      this.marvelService
         .getCharacterById(charId)
         .then(this.onCharLoaded)
         .catch(this.onError);
   }

   onCharLoaded = (char) => {
      this.setState({
         char, 
         loading: false,
      })
   }

   onCharLoading = () => {
      this.setState({
         loading: true
      })
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }

   render() {
      const {char, loading, error} = this.state;

      const skeleton = char || loading || error ? null : <Skeleton/>;
      const errorMessage = error ? <ErrorMessage/> : null;
      const spinner = loading ? <Spinner/> : null;
      const content = !(loading || error || !char) ? <View char={char}/> : null;

      return (
         <div className="char__info">
               {skeleton}
               {errorMessage}
               {spinner}
               {content}
         </div>
      )
   }
}

const View = ({char}) => {
   const {name, description, thumbnail, homepage, wiki, comics} = char;

   let imgStyle = {'objectFit' : 'cover'};
   if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgStyle = {'objectFit' : 'contain'};
   }

   return (
      <div className="charinfo">
         <div className="charinfo__basics">
            <img src={thumbnail} alt={name} className="charinfo__avatar" style={imgStyle}/>
            <div>
               <h2 className="charinfo__name">{name}</h2>
               <a href={homepage} className="button button__main">
                  <div className="inner">homepage</div>
               </a>
               <a href={wiki} className="button button__secondary">
                  <div className="inner">WIKI</div>
               </a>
            </div>
         </div>
         <p className="charinfo__desc">
            {description}
         </p>
         <p className="charinfo__comics">Comics:</p>
         <ul className="charinfo__list">
            {comics.length > 0 ? null : "There is no comics"}
            {
               comics.map((item, i) => {
                  if (i > 10) {
                     return
                  }
                  return (
                     <li key={i} className="charinfo__item">
                        {item.name}
                     </li>
                  )
               })
            }
         </ul>
      </div>
   )
}

export default CharInfo;