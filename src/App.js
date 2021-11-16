import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>

      <div className="home">
        <Home/>
      </div>
    
      <div className="about">
        <About/>
      </div>

      <div className="projects">
        <Projects/>
      </div>

      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
