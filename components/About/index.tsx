/* eslint-disable @next/next/no-img-element */
import styles from "../About/index.module.scss";
import mypic from "../../images/img1.jpg";

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.content}>
                <h3>ABOUT</h3>
                <h1>Who we are</h1>
                <p>We are an experienced team of professionals from the online entertainment industry.</p>
                <p>
                    After helping others fullfilling their business ambitions as employees, we now want to fullfill our
                    own goals.
                </p>
                <p>
                    We love to provide experience, guidance, support and compensation to anyone who wants to join us on
                    this journey.
                </p>
            </div>
            <img style={{ borderRadius: "15%" }} src={mypic.src} alt="About" />
        </div>
    );
};

export default About;
