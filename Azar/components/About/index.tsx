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
                    Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis
                    faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
                    ullamcorper gravida tellus ut consequat.
                </p>
            </div>
            <div className={styles.img}>
                <Image src={mypic} alt="About" />
            </div>
        </div>
    );
};

export default About;
