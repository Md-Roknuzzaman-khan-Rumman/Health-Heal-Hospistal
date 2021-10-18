import React from 'react';
import Header from "../../Components/Global/Header/Header";
import Footer from "../../Components/Global/Footer/Footer";
import Banner from "../../Components/Home/HomeBanner/Banner";
import HomeServices from "../../Components/Home/HomeServices/HomeServices";
import HomeDoctors from "../../Components/Home/HomeDoctors/HomeDoctors";
import HomeBlogs from "../../Components/Home/HomeBlogs/HomeBlogs";

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <HomeServices/>
            <HomeDoctors/>
            <HomeBlogs/>
            <Footer/>
        </div>
    );
};

export default Home;
