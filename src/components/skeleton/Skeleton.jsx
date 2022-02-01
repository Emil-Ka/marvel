import './skeleton.scss';

const Skeleton = () => {
   return (
      <div className="skeleton">
         <p className="skeleton__title">Please select a character to see information</p>
         <div className="skeleton__header">
            <div className="skeleton__circle pulse"></div>
            <div className="skeleton__mini pulse"></div>
         </div>
         <div className="skeleton__block pulse"></div>
         <div className="skeleton__block pulse"></div>
         <div className="skeleton__block pulse"></div>
      </div>
   );
}

export default Skeleton;