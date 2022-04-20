import AboutMe from './components/AboutMe';
import './App.css';
// import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Proyects';
import Footer from './components/Footer';
import Tech from './components/Tech';

const App = () => {
  return(
    <div className="App">
      <Nav/>
      <AboutMe/>
      <Projects/>
      <Tech/>
      <Footer/>
    </div>
  );
}

export default App;
