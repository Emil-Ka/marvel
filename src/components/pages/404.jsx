import ErrorMessage from "../errorMessage/ErrorMessage"

import {Link} from 'react-router-dom'

const Page404 = () => {
   return (
      <div>
         <ErrorMessage/>
         <p style={{'textAlign': 'center', 'fontSize': '24px'}}>Этой страницы не существует</p>
         <Link style={{'textAlign': 'center', 'fontSize': '24px'}} to="/">Перейти на главную</Link>
      </div>
   )
}

export default Page404