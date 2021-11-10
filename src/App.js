import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Gallery />
      <Contact />
      <Footer/>

  </div>
  );
}

export default App;
