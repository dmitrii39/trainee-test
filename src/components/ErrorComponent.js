

import './ErrorComponent.css';
import { ReactComponent as UFO} from '../assets/icons/ufoIcon.svg';
function ErrorComponent() {


  return (
    
    <div className="Error_container">
        <UFO className="ufo_styles"/>
        <h3 className="text-xl font-bold">Какой-то сверхразум все сломал</h3>
    <h4>Постараемся быстро починить</h4>
    <h4>Попробовать снова</h4>



  
    </div>
  );
}

export default ErrorComponent;