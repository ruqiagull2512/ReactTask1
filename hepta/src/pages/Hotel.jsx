import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import HotelGallery from "../components/HotelGallery";
import Service from '../components/Service'
import { BlogSection , Slider } from '../components/HotelSlider'
import Footer from '../components/Footer'


const Hotel =() =>{
    return(
        <>
        <Header/>
        <Service/>
        <ContentSection/>
        <HotelGallery/>
        <Slider/>
        <BlogSection/>
        <Footer/>
        </>
    )
}

export default Hotel;