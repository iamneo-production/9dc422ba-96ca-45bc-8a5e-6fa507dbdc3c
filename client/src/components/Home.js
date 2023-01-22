import NavBar from "./header"
import HomeBody from "./HomeBody";
import React from 'react';
import Why from "./whyUs";
import Services from "./services";
import Footer from "./Footer";

function Home({notOn, setnotOn}) {
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