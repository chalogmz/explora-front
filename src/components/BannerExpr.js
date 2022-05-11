import '../assets/css/Experimenta.css'
function BannerExpr() {
    return (
        <div className="expr-container">
            <div className="expr-banner">
                <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652129662/INTRO-FONDO_spuooc.jpg" alt="" />
                <div className="expr-banner-text">
                    <h2>Navegación<br></br>
                    por el universo<br></br>
                    para colegios</h2>
                    <span>En este viaje en vivo conoceremos los logros y descubrimientos<br></br> 
                    que hicieron mujeres y hombres inquietos por observar los <br></br>
                    misterios del cosmos. Acompañados por la curiosidad y el <br></br>
                    asombro, seremos testigos de la diversidad de objetos que hay en<br></br> 
                    nuestro universo y, a través de historias, viajaremos por lugares ya <br></br>
                    conocidos y por conocer.</span>
                </div>
                <div className="expr-banner-ws">
                    <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652129662/INTRO-WHATSAPP_iusbvv.png" alt=""/>
                    <span>Escríbenos por WhastApp</span>
                </div>
            </div>
        </div>
    )
}

export default BannerExpr;