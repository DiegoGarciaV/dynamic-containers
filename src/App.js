import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headers/top-header/TopHeader';
import BottomHeader from './components/headers/bottom-header/BottomHeader'
import Footer from './components/footers/footer/Fotter';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import EditableContainer from './components/containers/paragraph-container/Container';
import { ContentProvider } from './components/contexts/Contexts';
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ContentProvider>
            <h1>Editable Containers</h1>
            <EditableContainer containerId="ASDQWE" />
            <EditableContainer containerId="HGFWEG" />
            <EditableContainer containerId="JKHERS" />
          </ContentProvider>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
