import './appHeader.scss';

import {Link, NavLink} from 'react-router-dom'

const AppHeader = () => {
   return (
      <header className="header">
         <Link to="/">
            <h1 className="header__title">
               <span>Marvel</span> information portal
            </h1>
         </Link>
         <nav className="header__nav">
            <ul>
               <li><NavLink end style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})} to="/" className="header__link">Characters</NavLink></li>
                  /
               <li><NavLink style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})} to="/comics" className="header__link">Comics</NavLink></li>
            </ul>
         </nav>
      </header>
   );
};

export default AppHeader;