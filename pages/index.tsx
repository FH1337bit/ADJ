import Head from "next/head";
import { Fragment } from "react";
import About from "../components/About";
import Company from "../components/Company";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
                <div className="header">
                    <Header></Header>
                </div>
            </div>
        </Fragment>
    );
}
