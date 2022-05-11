import '../assets/css/Inicio.css'
import Banner from './Banner';
import Experiencias from './Experiencias';
import Posts from './Posts';


function Home() {
    return (
        <div className="home-container">
            <Banner />
            <Posts />
            <Experiencias />
        </div>
    )
}

export default Home;