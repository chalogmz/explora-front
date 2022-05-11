import '../assets/css/Caracteristicas.css'


function Caracteristicas() {
    return (
        <div className="carct-main">
            <div className="trip">
                <img className="trip-1" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652129662/CARACTERISTICAS-1_uhaqym.png" alt=""/>
                <img className="trip-2" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652129663/CARACTERISTICAS-2_ozuyg9.png" alt=""/>
            </div>
            <div className="trip-text">
                <h2 className="trip-title">Características</h2>
                <div className="carct">
                    <div className="carct-1">
                        <span>• Para estudiantes<br></br>
                        de 1 a 11 </span>
                        <span>• 1 sesión de 90<br></br>
                        minutos </span>
                    </div>
                    <div className="carct-2">
                        <span>• Incluye viaje por el<br></br> 
                        universo + actividad<br></br>
                        experimental</span>
                        <span>• Conexión privada<br></br>
                        por Zoom </span>                        
                    </div>
                    <div className="carct-3">
                        <span>• Grupos de 20 personas<br></br> 
                        acompañados por un<br></br>
                        mediador</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caracteristicas;