import xmen from '../../resources/img/x-men.jpg'
import './singleComicPage.scss'

import {Link, useParams} from 'react-router-dom'

const SingleComicPage = () => {
   const {comicId} = useParams()
   console.log(comicId)
   
   return (
      <div className="single-comic">
         <img className="single-comic__img" src={xmen} alt="xmen" />
         <div>
            <h1 className="single-comic__title">X-Men: Days of Future Past</h1>
            <p className="single-comic__desc">
               Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
            </p>
            <p className="single-comic__pages">144 pages</p>
            <p className="single-comic__language">Language: en-us</p>
            <p className="single-comic__price">9.99$</p>
         </div>
         <Link to="/comics" className="single-comic__link">Back to all</Link>
      </div>
   )
}

export default SingleComicPage