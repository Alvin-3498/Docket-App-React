import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import More from './components/More';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import User from './components/User';
import Admin from './components/Admin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/more' element={<More/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/user-dashboard/*' element={<User/>}/>
      <Route path='/admin-dashboard/*' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
