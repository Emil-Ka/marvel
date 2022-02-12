import './app.scss';
import vision from '../../resources/img/vision.png';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import Skeleton from '../skeleton/Skeleton';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';
import AppBanner from '../appBanner/AppBanner'
import ComicsList from '../comicsList/ComicsList'

import {useState} from 'react';

const App = () => {

   const [id, setId] = useState(null)

   const updateId = (id) => {
      setId(id)
   }

   return (
      <div className="app">
         <AppHeader/>
         <AppBanner/>
         <ComicsList/>
         {/* <main>
            <RandomChar/>
            <div className="char-content">
               <CharList updateId={updateId}/>
               <ErrorBoundery>
                  <CharInfo charId={id}/>
               </ErrorBoundery>
            </div>
         </main>
         <img src={vision} alt="vision" className="app__img"/> */}
      </div>
   )
}

export default App;
