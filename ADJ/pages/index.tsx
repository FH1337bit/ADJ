import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
                    <Header></Header>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </Fragment>
    );
}
