import useMarvelServices from '../../services/MarvelServices'
import {useState, useEffect} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';

import hamer from '../../resources/img/mjolnir.png'

const RandomChar = () => {

   const [char, setChar] = useState({})
   const {loading, error, getCharacterById} = useMarvelServices()

   useEffect(() => {
      updateCharacter()
   }, [])

   const changeLoading = (char) => {
      setChar(char)
   }

   const updateCharacter = (e) => {
      if (e) {
         e.preventDefault()
      }
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
      getCharacterById(id).then(changeLoading)
   }

      const errorBlock = error ? <ErrorMessage/> : null;
      const loadBlock = loading ? <Spinner/> : null;
      const content = !(error || loading) ? <View char={char}/> : null;

   return (
      <div className="randomchar">
         {errorBlock}
         {loadBlock}
         {content}
         <div className="randomchar__static static">
            <p className="static__title">
               Random character for today! <br />
               Do you want to get to know him better?
            </p>
            <p className="static__desc">Or choose another one</p>
            <a href="" className="button button__main">
               <div onClick={updateCharacter} className="inner">TRY IT</div>
            </a>
            <img src={hamer} alt="hamer" className="static__img"/>
         </div>
      </div>
   )
};

const View = ({char}) => {
   const {name, thumbnail, description, homepage, wiki} = char;
   return (
      <div className="randomchar__dynamic dynamic">
         <img src={thumbnail} style={(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? {objectFit: 'contain'} : null} alt="thumbnail" className="dynamic__img" />
         <div className="dynamic__info">
            <h2 className="dynamic__title">{name}</h2>
            <p className="dynamic__desc">
               {description}
            </p>
            <div className="dynamic__btns">
               <a href={homepage} className="button button__main">
                  <div className="inner">homepage</div>
               </a>
               <a href={wiki} className="button button__secondary">
                  <div className="inner">WIKI</div>
               </a>
            </div>
         </div>
      </div>
   );
}

export default RandomChar;