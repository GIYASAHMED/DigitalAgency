import './App.css';
import Home from './components/Home';
import About from './components/Aboutus/About';
import Services from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

export default App;
