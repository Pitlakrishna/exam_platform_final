import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/MainPage';
import { Dashboard } from './pages/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<MainPage/>}/>
          <Route path='/dashboard' element = {<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
