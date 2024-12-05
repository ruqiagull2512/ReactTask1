import AboutContentSection from "../components/AboutContSection";
import Header from "../components/Header";
import HotelGallery from "../components/HotelGallery";
import Slider from '../components/AboutSlider'
import GridWithSubDivs from "../components/AboutGrid";

import Footer from '../components/Footer'
const About =() =>{ 
    return(
        <>
        <Header/>
        <AboutContentSection/>
        <HotelGallery/>
        <Slider/>
        <GridWithSubDivs/>

        <Footer/>
        </>
    )
}

export default About;