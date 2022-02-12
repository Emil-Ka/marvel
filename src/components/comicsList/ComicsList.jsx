import './comicslist.scss'
import poster from '../../resources/img/comics1.jpg'

import useMarvelServices from '../../services/MarvelServices'
import {useEffect, useState} from 'react'

const ComicsList = () => {
   let result
   const {getComicsItems} = useMarvelServices()
   const [comicsList, setComicsList] = useState(null)

   useEffect(() => {
      getComicsItems()
      .then(res => setComicsList(res.data.results))
   }, [])

   const createComicsList = (res) => {
      const elements = res.map((item, i) => {
         return (
            <li key={i}>
               <div className="comicslist__card">
                  <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt="poster" className="comicslist__poster" />
                  <h3 className="comicslist__title">{item.title}</h3>
                  <p className="comicslist__price">{item.prices[0].price}$</p>
               </div>
            </li>
         )
      })

      return elements
   }

   return (
      <div>
         <ul className="comicslist">
            {result}
         </ul>
         <button
            className="button button__main button__long">
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default ComicsList