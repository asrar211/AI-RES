import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateResume } from './pages/CreateResume';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';



function App() {
  

  return (
    <BrowserRouter>
   <Layout>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<CreateResume/>}/>
   </Routes>
   </Layout>
    </BrowserRouter>
  );
}

export default App;