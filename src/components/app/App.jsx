import './app.scss';
import vision from '../../resources/img/vision.png';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import Skeleton from '../skeleton/Skeleton';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';

import {Component} from 'react';

class App extends Component {

   state = {
      id: null
   }

   updateId = (id) => {
      this.setState({id})
   }

   render() {
      return (
         <div className="app">
            <AppHeader/>
            <main>
               <RandomChar/>
               <div className="char-content">
                  <CharList updateId={this.updateId}/>
                  <ErrorBoundery>
                     <CharInfo charId={this.state.id}/>
                  </ErrorBoundery>
               </div>
            </main>
            <img src={vision} alt="vision" className="app__img"/>
         </div>
      );
   };
}

export default App;
