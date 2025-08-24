import React from 'react'; 
import {Routes,Route,useLocation} from 'react-router-dom' 
import Home from './pages/Home'; 
import Lost from './pages/LostItems'; 
import Found from './pages/FoundItems'; 
import Report from './pages/ReportItems'; 
import Login from './pages/Login'; 
import Register from './pages/Register' 
import Navbar from './components/Navbar' 
import Footer from './components/Footer'; 
import { ItemProvider } from "./context/ItemContext"; 
function App() { 
  const location=useLocation(); 
  return ( 
  <ItemProvider> 
    {(location.pathname!=='/register' && location.pathname!=='/login') && <Navbar/> } 
    <Routes> 
      <Route path='/' element={<Home/>}/> 
      <Route path='/lost' element={<Lost/>}/> 
      <Route path='/found' element={<Found/>}/> 
      <Route path='/report' element={<Report/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/> 
      </Routes> {(location.pathname!=='/register' && location.pathname!=='/login') && <Footer/> } 
      </ItemProvider> 
      ) } 
export default App