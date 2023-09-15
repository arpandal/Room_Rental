import Navbar from "../../component/navbar/navbar";

import Header from "../../component/header/header";
import Feature from "../../component/feature/feature";
import FeatureProperties from "../../component/featureProperties/featureProperites";
import Footer from "../../component/footer/footer";

import "./home.css";
const Home = () => {
    return (
        <div>
            <Navbar/>

            <Header/>
            <div className="homeContainer">
            <Feature/>
            <h1 className="homeTitle">Feature Property Type</h1>
            <FeatureProperties/>
            <Footer/>
            </div>

        </div>
    )
}
export default Home