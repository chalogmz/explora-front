import '../assets/css/Banner.css'

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h2 className="banner-title scale-in-hor-left">#ParqueExploraEnCasa</h2>
                <p className="banner-main-text scale-in-hor-left">¿Dinosaurios para niños? ¿Astronomia para curiosos? <br></br>
                Inscríbete a los nuevos curos online de Explora y <br></br> el Planetario,
                donde podrás entrar en estos y otros mundos.
                </p>
                <p className="banner-slogan scale-in-hor-left">¡Todos los temas, para todos los públicos!</p>
                <a target="_blank" rel="noreferrer" href="https://encasa.parqueexplora.org/">
                    <button className="banner-btn scale-in-hor-left">Conoce más</button>
                </a>
            </div>
            <div className="banner-illustration">
                <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652057474/flame-searching_ngbdzl.gif" className="logo-nav" alt="logo" />
            </div>
        </div>
    )
}

export default Banner;