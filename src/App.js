import './assets/css/App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Error404 from './components/Error404'
import Conocenos from './components/Conocenos'
import Experimenta from './components/Experimenta'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experimenta" element={<Experimenta />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
