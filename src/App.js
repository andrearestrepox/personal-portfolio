import  NavBar from './components/NavBar';
import Skills from './components/Skills';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router}


function App() {
  return (
    <div className="App">
      
      <NavBar /> 
      <Home />
      <Skills />

    
      
    </div>
  );
}

export default App;
