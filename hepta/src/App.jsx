import React from "react";

import { BrowserRouter as Router  , Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Hotel from './pages/Hotel'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contact from './pages/Contact'
// import Header from "./components/Navbar"; // Home NavBar
// import BodyContent from "./components/home2"; // Body Content
// import AdditionalContent from "./components/additionalContent"; // Additional Content
// import { Slider } from "./components/SliderBlog"; // Slider
// import { BlogSection } from "./components/SliderBlog"; // Blog Section
// import HappyCustomers from "./components/Customer"; // Happy Customers Section
// import CustomerReviewSection from "./components/Services"; // Services Section
// import Footer from "./components/Footer"; // Footer
// import HotelNav from "./Hotel/HotelNav"; // Hotel Navigation

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* Home Route */}
    //     <Route
    //       path="/"
    //       element={
    //         <div className="App">
    //           <Header />
    //           <BodyContent />
    //           <AdditionalContent />
    //           <Slider />
    //           <BlogSection />
    //           <HappyCustomers />
    //           <CustomerReviewSection />
    //           <Footer />
    //         </div>
    //       }
    //     />

    //     {/* Hotel Route */}
    //     <Route
    //       path="/hotelnav"
    //       element={
    //         <div className="App">
    //           <HotelNav/>
    //         </div>
    //       }
    //     />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element ={<Navigate to="/home"/>}/>
        <Route path ="/home" element ={<Home/>}/>
        <Route path ="/aboutus" element ={<AboutUs/>}/>
        <Route path ="/hotel" element ={<Hotel/>}/>
        <Route path ="/gallery" element ={<Gallery/>}/>
        <Route path ="/news" element ={<News/>}/>
        <Route path ="/contact" element ={<Contact/>}/>


      </Routes>
    </Router>
  );
}

export default App;
