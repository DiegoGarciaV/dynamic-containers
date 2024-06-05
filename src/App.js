import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headers/TopHeader/TopHeader';
import BottomHeader from './components/headers/BottomHeader/BottomHeader'
import Footer from './components/footers/footer/Footer';
import Home from './pages/home/Home';
import AcademicOffer from './pages/AcademicOffer/AcademicOffer'
import Services from './pages/services/Services'
import Faculties from './pages/faculties/Faculties'

import AcademicServicesRouter from './pages/AcademicServices/AcademicServicesRouter'
import AboutRouter from './pages/about/AboutRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='full-page-container'>
          <header>
            <Header></Header>
            <BottomHeader></BottomHeader>
          </header>
          <main className="spa-container">
            <Routes >
              <Route exact path="/" element={<Home />} />
              <Route path="/licenciaturas" element={<AcademicOffer />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/alumnado/*" element={<AcademicServicesRouter />} />
              <Route path="/academicos" element={<Faculties />} />
              <Route path="/nosotros/*" element={<AboutRouter />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
