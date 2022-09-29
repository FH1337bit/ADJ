import Head from "next/head";
import { Fragment } from "react";
import About from "../components/About";
import Company from "../components/Company";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import ScrollText from "../components/ScrollText";
import Team from "../components/Team";
import Us from "../components/Us";
import Work from "../components/Work";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Azar elite</title>
                <meta name="description" content="Azar elite - Landing page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="content">
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div className="us">
                    <Us></Us>
                </div>
                <div className="scroll_text">
                    <ScrollText></ScrollText>
                </div>
                <div className="separator1"></div>
                <div className="quote">
                    <Quote></Quote>
                </div>
                <div className="separator2"></div>
                <div className="about">
                    <About></About>
                </div>
                <div className="about">
                    <Team></Team>
                </div>
                <div className="separator3"></div>
                <div className="work">
                    <Work></Work>
                </div>
                <div className="company">
                    <Company></Company>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </Fragment>
    );
}
