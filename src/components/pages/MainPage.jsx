import vision from '../../resources/img/vision.png';

import {useState} from 'react'
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import Skeleton from '../skeleton/Skeleton';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';

const MainPage = () => {

   const [id, setId] = useState(null)

   const updateId = (id) => {
      setId(id)
   }

   return (
      <>
         <RandomChar/>
         <div className="char-content">
            <CharList updateId={updateId}/>
            <ErrorBoundery>
               <CharInfo charId={id}/>
            </ErrorBoundery>
         </div>
         <img src={vision} alt="vision" className="app__img"/>
      </>
   )
}

export default MainPage