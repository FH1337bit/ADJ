import styles from "../About/index.module.scss";
import Image from "next/image";
import mypic from "../../images/img1.jpg";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <h3>ABOUT</h3>
                <h1>Who we are</h1>
                <p>
                    We are an experienced team of professionals from the online entertainment industry. After helping
                    others fullfilling their business ambitions as employees, we now want to fullfill our own goals. We
                    love to provide experience, guidance, support and compensation to anyone who wants to join us on
                    this journey.
                </p>
            </div>
            <div className={styles.img}>
                <Image src={mypic} alt="About" />
            </div>
        </div>
    );
};

export default About;
