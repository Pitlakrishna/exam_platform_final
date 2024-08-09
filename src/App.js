import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Instructions } from './pages/Instructions';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path = "/instructions" element = {<Instructions/>}/>
          <Route path='/dashboard/*' element = {<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
