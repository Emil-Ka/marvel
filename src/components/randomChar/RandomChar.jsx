import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import hamer from '../../resources/img/mjolnir.png'

const RandomChar = () => {
   return (
      <div className="randomchar">
         <div className="randomchar__dynamic dynamic">
            <img src={thor} alt="" className="dynamic__img" />
            <div className="dynamic__info">
               <h2 className="dynamic__title">THOR</h2>
               <p className="dynamic__desc">
                  As the Norse God of thunder and lightning, Thor wields one of the greatest 
                  weapons ever made, the enchanted hammer Mjolnir. While others have described 
                  Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
               </p>
               <div className="dynamic__btns">
                  <a href="" className="button buttom__main">
                     <div className="inner">homepage</div>
                  </a>
                  <a href="" className="button button__secondary">
                     <div className="inner">WIKI</div>
                  </a>
               </div>
            </div>
         </div>
         <div className="randomchar__static static">
            <p className="static__title">
               Random character for today! <br />
               Do you want to get to know him better?
            </p>
            <p className="static__desc">Or choose another one</p>
            <a href="" className="button button__main">
               <div className="inner">TRY IT</div>
            </a>
            <img src={hamer} alt="hamer" className="static__img"/>
         </div>
      </div>
   );
};

export default RandomChar;