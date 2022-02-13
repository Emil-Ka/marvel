import './comicslist.scss'

import useMarvelServices from '../../services/MarvelServices'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Spinner from '../spinner/Spinner'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

const ComicsList = () => {
   const {loading, error, getComicsItems} = useMarvelServices()

   const [comicsList, setComicsList] = useState([])
   const [newItemsLoading, setNewItemsLoading] = useState(false)
   const [offset, setOffset] = useState(0)
   const [comicsEnded, setComicsEnded] = useState(false)

   useEffect(() => {
      onRequest(offset, true)
      console.log('mount')
   }, [])

   const onRequest = (offset, initial) => { //Получаем данные и меняем newItemsLoading
      initial ? setNewItemsLoading(false) : setNewItemsLoading(true)
      getComicsItems(offset)
      .then(onComicsListLoaded)
   }

   const onComicsListLoaded = (newComicsList) => { //Добавляем в состояние новый объект с данными, меняем offset, newItemsLoading
      if (newComicsList.length < 8) {
         setComicsEnded(true)
      }

      setComicsList([...comicsList, ...newComicsList])
      setOffset(offset + 8)
      setNewItemsLoading(false)
   }

   const createComicsList = (arr) => { //Создаем вёрстку
      const items = arr.map((item, i) => {
         return (
            <li key={i} className="comicslist__card">
               <Link to={`/comics/${item.id}`}>
                  <img src={item.thumbnail} alt="poster" className="comicslist__poster" />
                  <h3 className="comicslist__title">{item.title}</h3>
                  <p className="comicslist__price">{item.price}</p>
               </Link>
            </li>
         )
      })

      return (
         <ul className="comicslist">
            {items}
         </ul>
      )
   }

   const items = createComicsList(comicsList)
   const errorMessage = error ? <ErrorMessage/> : null
   const spinner = loading ? <Spinner /> : null

   return (
      <div>
         {errorMessage}
         {spinner}
         {items}
         <button
            style={{'display' : comicsEnded ? 'none' : 'block'}}
            disabled={newItemsLoading}
            onClick={() => onRequest(offset)}
            className="button button__main button__long">
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default ComicsList