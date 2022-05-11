import '../assets/css/Post.css'
function Experiencias() {
    return (
        <div className="post-container">
            <div className="post-liner"></div>
            <div className="post-title">
                <h2>NUESTRAS EXPERIENCIAS</h2>
            </div>
            <div className="post-cards">
                <div className="card">
                    <div className="card-img">
                        <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1651344410/rick-and-morty-rick-and-morty-39568281-600-600_xv8n07.jpg" alt="img" />
                    </div>
                    <div className="card-text">
                        <h2 className="card-title">Titulo</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencias;