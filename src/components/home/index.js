import React from "react";
import Body from "../body";
import Footer from "../footer";
import Header from "../header";
import "./home.css";

function Home() {
    return (
        <><div className="home">
            <Header />
        </div>
            <div>
                <Body />
                <div>
                    <Footer />
                </div>
            </div></>
    )
}

export default Home;