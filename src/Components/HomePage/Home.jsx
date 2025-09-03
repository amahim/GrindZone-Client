import Services from "./Services";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Membership from "./Membership";
import Equipments from "./Equipments";
// import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
        {/* <Navbar /> */}
        <Banner />
        <Services />
        <Membership />
        <Equipments/>
        <Contact />
        <Footer />
        </div>
    );
};

export default Home;