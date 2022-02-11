import './appBanner.scss'
import banner from  '../../resources/img/banner.png'
import logo from '../../resources/img/logo.png'

const AppBanner = () => {
   return (
      <div className="app-banner">
         <img src={banner} alt="banner" className="app-banner__heroes" />
         <h2 className="app-banner__title">New comics every week! Stay tuned!</h2>
         <img src={logo} alt="logo" className="app-banner__logo" />
      </div>
   )
}

export default AppBanner