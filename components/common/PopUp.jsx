import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import Feature from '../home-page/home-1/Feature';

const PopUp = () => {
  return (
    <div>
    <Popup trigger={<button> Click to open popup </button>} 
     position="right center">
      <Feature />
    </Popup>
  </div>
  )
}

export default PopUp