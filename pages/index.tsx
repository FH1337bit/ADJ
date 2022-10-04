import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Fundamentals from "../components/Fundamentals";
import Header from "../components/Header";
import OurTeam from "../components/OurTeam";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Azar elite</title>
                <meta name="description" content="Azar elite - Landing page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="content">
                <div className="header">
                    <Header></Header>
                </div>
                <div className="ourteam">
                    <OurTeam></OurTeam>
                </div>
                <div className="fundamentals">
                    <Fundamentals></Fundamentals>
                </div>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        </Fragment>
    );
}
