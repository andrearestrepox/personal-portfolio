import  NavBar from './components/NavBar';
import Skills from './components/Skills';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router}


function App() {
  return (
    <div className="App">
      
      <NavBar /> 
      <Home />
      <Skills />
      <Projects />
      <ProjectCard />
      
    </div>
  );
}

export default App;
