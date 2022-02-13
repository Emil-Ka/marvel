import AppBanner from '../appBanner/AppBanner'
import ComicsList from '../comicsList/ComicsList'
import {Routes, Route} from 'react-router-dom'

import SingleComicPage from '../pages/SingleComicPage'

const ComicsPage = () => {
   return (
      <>
         <AppBanner/>
         <Routes>
            <Route path="/" element={<ComicsList/>}/>
            <Route path=":comicId" element={<SingleComicPage/>}/>
         </Routes>
      </>
   )
}

export default ComicsPage