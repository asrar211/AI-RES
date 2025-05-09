import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateResume } from './pages/CreateResume';
import { Home } from './pages/Home';



function App() {
  

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/create' element={<CreateResume/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;