import BodyContent from "../components/BodyContent";
import Header from "../components/Header";
import Service from '../components/Service'
import { BlogSection , Slider } from '../components/SliderBlog'
import Customer from '../components/Customer'
import CustomerReview from '../components/CustomerReview'
import Footer from '../components/Footer'
import InternationalTour from "../components/ITourM";
const  Home = ()=>{
    return(
        <>
        <Header/>
        <BodyContent/>
        <Service/>
        <InternationalTour/>
        <Slider/>
        <BlogSection/>
        
        <Customer/>
        <CustomerReview/>
        <Footer/>
        
        </>
    )
}

export default Home;