import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headers/top-header/TopHeader';
import BottomHeader from './components/headers/bottom-header/BottomHeader'
import Footer from './components/footers/footer/Fotter';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AcademicOffer from './pages/academic-offer/AcademicOffer'
import AcademicServices from './pages/academic-services/AcademicServices'
import Services from './pages/services/Services'
import Faculties from './pages/faculties/Faculties'
import Introduction from './spa/academic-services/Introduction';
import Movility from './spa/academic-services/Movility';
import Social from './spa/academic-services/Social';
import Practices from './spa/academic-services/Practices';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header></Header>
          <BottomHeader></BottomHeader>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/licenciaturas" element={<AcademicOffer />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/alumnado" element={<AcademicServices />} >
              <Route path="escolares" element={<Introduction />} />
              <Route path="movilidad" element={<Movility />} />
              <Route path="social" element={<Social />} />
              <Route path="profesionales" element={<Practices />} />
            </Route>
            <Route path="/academicos" element={<Faculties />} />
            <Route path="/nosotros" element={<About />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
