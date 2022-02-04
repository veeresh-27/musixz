
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route,Routes,Redirect} from 'react-router-dom'
import Playbar from './components/Playbar/Playbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Playbar/>
      </Router>
    </div>
  );
}

export default App;
