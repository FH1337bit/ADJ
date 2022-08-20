import styles from "../Team/index.module.scss";
import Image from "next/image";
import mypic from "../../images/img2.jpg";

const Team = () => {
    return (
        <div className={styles.about}>
            <div className={styles.img}>
                <Image style={{ borderRadius: "10%" }} src={mypic} alt="About" />
            </div>
            <div className={styles.content}>
                <h3>TEAM</h3>
                <h1>Who we do</h1>
                <p>
                    Our goal is to provide a great service to the companies operating in the online entertainment
                    industy. We believe strongly in our clients products and we deeply and seemlesly entertwine our
                    product and service with theirs. Our daily bread is developing custom software solutions, creation
                    of online marketing campaigns, promote and support the customers brand. Forge out of our customers
                    complicated problems new challenges for us. Create new services and solutions that the industry has
                    not seen yet.
                </p>
            </div>
        </div>
    );
};

export default Team;
