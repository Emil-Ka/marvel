import './charList.scss';

import useMarvelServices from '../../services/MarvelServices';
import React, {useState, useEffect} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { clear } from '@testing-library/user-event/dist/clear';

const CharList = (props) => {

   const [charList, setCharList] = useState([])
   const [newItemsLoading, setNewItemsLoading] = useState(false)
   const [offset, setOffset] = useState(0)
   const [maxItems, setMaxItems] = useState(1559)

   const {loading, error, getAllCharacters, clearError} = useMarvelServices()

   const onRequest = (offset, initial) => {
      initial ? setNewItemsLoading(false) : setNewItemsLoading(true)
      clearError()
      getAllCharacters(offset)
         .then(res => changeCharList(res.data.results))

      setOffset(offset => offset + 9)
   }

   const addChars = () => {
      onRequest(offset, false)
   }

   const changeCharList = (newCharList) => {
      setCharList([...charList, ...newCharList])
   }

   useEffect(() => {
      onRequest(offset, true);
   }, [])

   const itemRefs = []; //массив с узлами элементов карточек

   const setRef = (element) => {
      itemRefs.push(element); //Записываем в массив с рефами узел элеиента карточки
   }

   const onFocusItem = (id) => {
      itemRefs.forEach(item => item.classList.remove('card--active'));
      itemRefs[id].classList.add('card--active');
      itemRefs[id].focus();
   }

   const onUpdateCharByEnter = (event, id) => {
      if (event.key === 'Enter') {
         props.updateId(id)
      }
   }

   const createCharList = () => {
      const items = charList.map((item, i) => {
         return (
            <li 
               className="charlist__item"
               key={item.id}
               tabIndex={0}
               ref={setRef}
               onClick={() => onFocusItem(i)}
               onFocus={() => onFocusItem(i)}
               onKeyDown={(event) => onUpdateCharByEnter(event, item.id)}>
               <div 
                  className="charlist__card card"
                  onClick={() => props.updateId(item.id)}>
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
      const items = createCharList();

      const errorMessage = error ? <ErrorMessage/> : null;
      const spinner = loading && !newItemsLoading ? <Spinner/> : null;
      const content = !(errorMessage || spinner) ? items : null;

   return (
      <div className="charlist">
         {spinner}
         {errorMessage}
         {content}
         <button 
            onClick={() => addChars()} 
            disabled={newItemsLoading}
            style={{'display': offset >= maxItems ? 'none' : 'block'}}
            className="button button__main button__long">
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default CharList