import NavBar from "./header"
import HomeBody from "./HomeBody";
import React, { useState } from 'react';
import Why from "./whyUs";
import Services from "./services";
import Footer from "./Footer";

function Home() {
    const [notOn, setnotOn] = useState({ display: "none" });
    return (
        <>
            <NavBar
                changeState={setnotOn}
            />
            <HomeBody
                state={notOn}
                changeState={setnotOn}

            />
            <Why />
            <Services />
            <Footer />

        </>
    )

}
export default Home;