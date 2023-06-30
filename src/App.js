import "./App.css";
import Home from "./Pages/Home/Home" 
import About from "./Pages/About/About" 
import {Routes , Route } from "react-router-dom" 
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Button from "./Layouts/Button/Button";
import Service from "./Pages/Service/Service";
import { ToastContainer } from "react-toastify";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <Header/>
      <Button/>
      <ToastContainer />
      <Routes> 
            <Route path="/" Component={Home} /> 
            <Route path="/about" Component={About} /> 
            <Route path="/service" Component={Service} />
            <Route path="/booking" Component={Booking} />
       </Routes> 
       <Footer/>
    </div>
  );
}

export default App;
