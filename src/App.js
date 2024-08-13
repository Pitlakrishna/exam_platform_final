import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Instructions } from './pages/Instructions';
import { HomePage } from './pages/HomePage';
import { ExamPage } from './pages/Exam';
import { FeedBackPage } from './pages/Feedback';
import { QuestionPopup } from './pages/QuestionPopup';
import ResultPage from './pages/ResultPage/ResultPage';
import Certificate from './pages/ResultPage/Certificate/Certificate';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/exam' element={<ExamPage />} />
          <Route path='/feedback' element={<FeedBackPage />} />
          <Route path="/question-popup" element={<QuestionPopup />} />
          <Route path='/result' exact element={<ResultPage />} />
          <Route path="/question-popup" exact element={<QuestionPopup />} />
          <Route path="/certificate" exact element={<Certificate />} />
          <Route path='/profile' exact element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
