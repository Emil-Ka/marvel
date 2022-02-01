import img from './error.gif'

const ErrorMessage = () => {
   return (
      <img src={img} alt="Error" style={{width: '250px', height: 'auto', margin: '0 auto'}}/>
   );
}

export default ErrorMessage;