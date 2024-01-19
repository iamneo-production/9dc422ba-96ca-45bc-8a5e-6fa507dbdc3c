import NavBar from "../components/Global/header"
import HomeBody from "../components/Home/HomeBody";
import React from 'react';
import Why from "../components/Home/whyUs";
import Services from "../components/Home/services";
import Footer from "../components/Global/Footer";

function Home({ notOn, setnotOn }) {
    return (
        <>
            <NavBar
                setnotOn={setnotOn}
            />
            <HomeBody
                notOn={notOn}
                setnotOn={setnotOn}
            />
            <Why />
            <Services />
            <Footer />

        </>
    )

}
export default Home;