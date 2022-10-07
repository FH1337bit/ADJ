import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Fundamentals from "../components/Fundamentals";
import Header from "../components/Header";
import Help from "../components/Help";
import Ideas from "../components/Ideas";
import OurTeam from "../components/OurTeam";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>ADJ CONSULTING</title>
                <meta name="description" content="ADJ CONSULTING- Landing page" />
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
                <div className="help">
                    <Help></Help>
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
