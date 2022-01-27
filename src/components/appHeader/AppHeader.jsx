import './appHeader.scss';

const AppHeader = () => {
   return (
      <header className="header">
         <h1 className="header__title">
            <span>Marvel</span> information portal
         </h1>
         <nav className="header__nav">
            <ul>
               <li><a href="" className="header__link">Characters</a></li>
                  /
               <li><a href="" className="header__link">Comics</a></li>
            </ul>
         </nav>
      </header>
   );
};

export default AppHeader;