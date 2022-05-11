import '../assets/css/Experimenta.css'
import BannerExpr from './BannerExpr';
import Caracteristicas from './Caracteristicas';
import Objetivos from './Objetivos';

function Experimenta() {
    return (
        <div className="expr-main">
            <BannerExpr />
            <Objetivos />
            <Caracteristicas />
        </div>
    )
}

export default Experimenta;