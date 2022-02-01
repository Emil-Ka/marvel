import './charList.scss';

import React, {Component} from 'react';
import MarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

   state = {
      charList: [],
      loading: true,
      error: false,
      newItemsLoading: false,
      offset: 0,
      maxItems: 1559
   }

   MarvelService = new MarvelServices();

   onRequest = (offset) => {
      this.MarvelService.getAllCharacters(offset)
         .then(res => this.changeCharList(res.data.results))
         .catch(this.changeError);

      this.setState(({offset}) => ({offset: offset + 9}));
   }

   onNewItemsLoading = () => {
      this.setState({newItemsLoading: true});
   }

   addChars = () => {
      this.onNewItemsLoading();

      this.onRequest(this.state.offset);
   }

   changeCharList = (newCharList) => {
      this.setState(({charList}) => ({
         charList: [...charList, ...newCharList], 
         loading: false,
         newItemsLoading: false
      }));
   }

   changeError = () => {
      this.setState({loading: false, error: true});
   }

   componentDidMount() {
      this.onRequest(this.state.offset);

      window.addEventListener('scroll', () => {
         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            this.onRequest(this.state.offset);
         }
      })
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', () => {
         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            this.onRequest(this.state.offset);
         }
      })
   }

   itemRefs = []; //массив с узлами элементов карточек

   setRef = (element) => {
      this.itemRefs.push(element); //Записываем в массив с рефами узел элеиента карточки
   }

   onFocusItem = (id) => {
      this.itemRefs.forEach(item => item.classList.remove('card--active'));
      this.itemRefs[id].classList.add('card--active');
      this.itemRefs[id].focus();
   }

   onUpdateCharByEnter = (event, id) => {
      if (event.key === 'Enter') {
         this.props.updateId(id)
      }
   }

   createCharList = () => {
      const items = this.state.charList.map((item, i) => {
         return (
            <li 
               className="charlist__item"
               key={item.id}
               tabIndex={0}
               ref={this.setRef}
               onClick={() => this.onFocusItem(i)}
               onFocus={() => this.onFocusItem(i)}
               onKeyDown={(event) => this.onUpdateCharByEnter(event, item.id)}>
               <div 
                  className="charlist__card card"
                  onClick={() => this.props.updateId(item.id)}>
                  <img 
                     src={item.thumbnail.path + '.' + item.thumbnail.extension} 
                     alt={item.name} 
                     className="card__img" 
                     style={(item.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') ? {objectFit: 'unset'} : null}/>
                     <div className="card__name">{item.name}</div>
               </div>
            </li>
         );
      });

      return (
         <ul className="charlist__list">
            {items}
         </ul>
      );
   }

   render() {
      const {loading, error, newItemsLoading} = this.state;
      const items = this.createCharList();

      const errorMessage = error ? <ErrorMessage/> : null;
      const spinner = loading ? <Spinner/> : null;
      const content = !(errorMessage || spinner) ? items : null;

      return (
         <div className="charlist">
            {spinner}
            {errorMessage}
            {content}
            <button 
               onClick={() => this.addChars()} 
               disabled={newItemsLoading}
               style={{'display': this.state.offset >= this.state.maxItems ? 'none' : 'block'}}
               className="button button__main button__long">
               <div className="inner">load more</div>
            </button>
         </div>
      );
   };
};

export default CharList;