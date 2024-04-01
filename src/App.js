import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App pt-[140px] pb-[50px]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
