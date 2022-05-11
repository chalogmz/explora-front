import '../assets/css/Footer.css'


function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img className="foot-logo-1" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652067465/a949f510-c3eb-11ec-bf80-e74645a81647-logo-explorawhite_mzsuxn.svg" alt="" />
                <img className="foot-logo-2" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652067502/ad224d40-c3eb-11ec-bf80-e74645a81647-logo-planetariowhite_1_ffib2j.svg" alt="" />
                <img className="foot-logo-3" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652067459/b07289b0-c3eb-11ec-bf80-e74645a81647-logo-exploratoriowhite_yhj1hi.svg" alt="" />
            </div>
            <div className="footer-location">
                <div className="foot-title">
                    <span>UBICACIÓN</span>
                </div>
                <div className="footer-content-adress">
                    <span className="foot-adress">CARRERA 52 N. 73 - 75</span>
                    <span className="foot-city">MEDELLÍN - COLOMBIA</span>
                    <span className="foot-phone">+57(4) 516 83 00</span>
                </div>
                <div className="foot-media">
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;