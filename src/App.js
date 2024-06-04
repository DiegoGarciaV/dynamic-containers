import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headers/TopHeader/TopHeader';
import BottomHeader from './components/headers/BottomHeader/BottomHeader'
import Footer from './components/footers/footer/Fotter';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AcademicOffer from './pages/AcademicOffer/AcademicOffer'
import AcademicServices from './pages/AcademicServices/AcademicServices'
import Services from './pages/services/Services'
import Faculties from './pages/faculties/Faculties'
import Introduction from './spa/academic-services/school-services/Introduction';
import Movility from './spa/academic-services/movility/Movility';
import Social from './spa/academic-services/Social';
import Practices from './spa/academic-services/Practices';
import Scolarship from './spa/academic-services/Scolarship';
import Tutoring from './spa/academic-services/Tutoring'
import PsychologicalGuidance from './spa/academic-services/PsychologicalGuidance'
import JobBoard from './spa/academic-services/JobBoard'
import GeneralConditions from './spa/academic-services/movility/GeneralConditions';
import Admission from './spa/academic-services/school-services/Admission'
import Certificates from './spa/academic-services/school-services/Certificates'
import Imss from './spa/academic-services/school-services/Imss'
import Inscription from './spa/academic-services/school-services/Inscription'
import QnA from './spa/academic-services/school-services/QnA'
import Reinscription from './spa/academic-services/school-services/Reinscription'
import Suspension from './spa/academic-services/school-services/Suspension'
import Title from './spa/academic-services/school-services/Title'
import Background from './spa/about/Background'
import Values from './spa/about/Values'
import OrganizationChart from './spa/about/OrganizationChart'
import Directory from './spa/about/Directory'
import Management from './spa/about/Management'
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
              <Route path="/nosotros" element={<About />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/alumnado" element={<AcademicServices />} >
                <Route path="escolares/" element={<Introduction />} />
                  <Route path="escolares/admision" element={<Admission />} />
                  <Route path="escolares/inscripcion" element={<Inscription />} />
                  <Route path="escolares/reinscripcion" element={<Reinscription />} />
                  <Route path="escolares/constancias" element={<Certificates />} />
                  <Route path="escolares/suspension" element={<Suspension />} />
                  <Route path="escolares/imss" element={<Imss />} />
                  <Route path="escolares/titulacion" element={<Title />} />
                  <Route path="escolares/preguntas" element={<QnA />} />
                <Route path="movilidad" element={<Movility />} />
                  <Route path="movilidad/terminos" element={<GeneralConditions />} />
                <Route path="becas" element={<Scolarship />} />
                <Route path="social" element={<Social />} />
                <Route path="profesionales" element={<Practices />} />
                <Route path="tutorias" element={<Tutoring />} />
                <Route path="orientacion-psicologica" element={<PsychologicalGuidance />} />
                <Route path="bolsa-trabajo" element={<JobBoard />} />
              </Route>
              <Route path="/academicos" element={<Faculties />} />
              <Route path="/nosotros" element={<About />} >
                <Route path="/nosotros/antecedentes" element={<Background />} />
                <Route path="/nosotros/valores" element={<Values />} />
                <Route path="/nosotros/organigrama" element={<OrganizationChart />} />
                <Route path="/nosotros/directorio" element={<Directory/>} />
                <Route path="/nosotros/gestion" element={<Management/>} />
              </Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
