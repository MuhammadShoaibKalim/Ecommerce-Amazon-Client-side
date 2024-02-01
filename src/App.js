import "./App.css";
import Navbar from './Components/header/Navbaar.js';
import Newnav from './Components/newNavbar/Newnav.js';
import Maincomp from "./Components/Home/Maincomp.js";
import Footer from "./Components/footer/Footer.js";
import SignUp from "./Components/signin_up/SignUp.js";
import Sign_in from "./Components/signin_up/Sign_in.js";
import { Routes, Route  } from "react-router-dom";
import Cart from "./Components/cart/Cart.js";
import Buynow from "./Components/buynow/Buynow.js";

function App() {
    return (
      <>
       <Navbar/>
          <Newnav/>
         <Routes>
            <Route path="/" element={<Maincomp/>} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/register" element={<SignUp/>} />
            <Route path="/getproductsone/:id" element={<Cart/>} />
            <Route path="/buynow" element={<Buynow/>}/>
         </Routes>
      <Footer/>
   

      </>
    );
}

export default App;
