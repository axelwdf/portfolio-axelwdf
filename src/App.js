import AboutMe from './components/AboutMe';
import './App.css';
// import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Proyects';
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="App">
      <Nav/>
      {/* <Header/> */}
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
