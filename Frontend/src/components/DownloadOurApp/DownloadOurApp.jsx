import './DownloadOurApp.css';
import { assets } from '../../assets/assets.js';

const DownloadOurApp = () => {
  return (
    <div className='application-donwload' id='appDownloadd'>
        <h1>For Better Experience Download <br /> <span style={{color:'tomato'}}>SPICY</span> App</h1>
        <div className='download-logo'>
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
    </div>
  )
}

export default DownloadOurApp