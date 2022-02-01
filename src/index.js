import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/app/App';
import MarvelServices from './services/MarvelServices';

const MarvelService = new MarvelServices();

//MarvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));
//MarvelService.getCharacterById(1011334).then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
