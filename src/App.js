import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div className="App pt-[110px] pb-[50px]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
