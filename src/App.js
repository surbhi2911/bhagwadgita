
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Buynow from './Components/Buynow';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/buynow' element={<Buynow/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
