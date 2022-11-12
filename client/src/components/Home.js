import NavBar from "./header"
import HomeBody from "./HomeBody";
import React from 'react';
import Why from "./whyUs";
import Services from "./services";
import Footer from "./Footer";

function Home() {
    return (
        <>
                <NavBar />
                <HomeBody />
                <Why />
                <Services />
                <Footer />

        </>
    )

}
export default Home;