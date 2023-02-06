// import logo from './Component/photo.jpg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Comp/Contact'
import Adduser from './Comp/Adduser';
import UpdateUser from './Comp/Updateuser';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div id='div'>

   
    
    <div  className="App">  
    
    {/* <img src={logo} alt="Logo" /> */}



    





     <BrowserRouter basename='/App-Contacte'>
     <Navbar/>
               
      <Routes>
          <Route  path='/' index element={<Contact/>}></Route>
          <Route  path='/add_user' element={<Adduser/>}></Route>
          <Route  path='/update_user/:id' element={<UpdateUser/>}></Route>

      </Routes>
     </BrowserRouter>
     </div>
    
     </div>
  );
}

export default App;
