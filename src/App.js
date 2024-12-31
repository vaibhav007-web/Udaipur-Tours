import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import CarRental from './Components/CarRental';
import Contact from './Components/Contact';
import Packages from './Components/Packages';
import Tourism from './Components/Tourism';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CarRentalDetails from './Components/CarRentalDetails';
import CarDetails from './Components/CarDetails';
import Packagedetails from './Components/Packagedetails';
import Reviewdetails from './Components/Reviewdetails';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/carrental" element={<CarRental/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/packages" element={<Packages/>}></Route>
      <Route path="/udaipurtourism" element={<Tourism/>}></Route>
      <Route path="/packagedetails" element={<Packagedetails/>}></Route>
      <Route path="/carrental/details/:id" element={<CarRentalDetails />} />
      <Route path="/cardetails/:id" element={<CarDetails/>}></Route>
      <Route path="/reviewdetails/:id" element={<Reviewdetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>  

  );
}

export default App;
