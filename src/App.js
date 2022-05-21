import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="bg-[#0A192F] h-screen">
      <Router>
        <Nav/>
       <Home/>
      </Router>
    </div>
  );
}

export default App;
