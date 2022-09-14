import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import DinosaurDatabase from './pages/DinosaurDatabase';
import DinosaurBattles from './pages/DinosaurBattles';
import AboutMe from './pages/AboutMe';
import ErrorHandler from './pages/ErrorHandler';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dinosaur-database' element={<DinosaurDatabase/>}/>
        <Route path='/dinosaur-battles' element={<DinosaurBattles/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='*' element={<ErrorHandler/>}/>
      </Routes>
    </Router>
  );
}

export default App;
