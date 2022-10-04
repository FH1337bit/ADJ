import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Fundamentals from "../components/Fundamentals";
import Header from "../components/Header";
import Ideas from "../components/Ideas";
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
                    <Ideas></Ideas>
                </div>
                <div className="ourteam">
                    <OurTeam></OurTeam>
                </div>
                <div className="fundamentals">
                    <Fundamentals></Fundamentals>
                </div>
                <div className="form">
                    <Form></Form>
                </div>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        </Fragment>
    );
}
