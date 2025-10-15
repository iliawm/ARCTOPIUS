import AboutUsHome from "../components/AboutUsHome.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx"
import Nav from "../components/nav.jsx"
import WhyUs from "../components/whyUs.jsx";

function Home(){
    return(
        <>
        <div className="backdrop" onClick={()=>{
            document.querySelector(".hamsvg").classList.toggle("open");
            document.querySelector(".popuphammenu").classList.toggle("open")
                document.querySelector(".backdrop").classList.toggle("open")
        }}></div>
        <Nav/>
        <Hero/>
        <WhyUs/>
        <AboutUsHome/>
        <Footer/>
        </>
    )
}
export default Home