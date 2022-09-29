/* eslint-disable @next/next/no-img-element */
import styles from "../Team/index.module.scss";
import mypic from "../../images/img2.jpg";

const Team = () => {
    return (
        <div id="team" className={styles.about}>
            <div className={styles.content}>
                <h3>TEAM</h3>
                <h1>What we do</h1>
                <p>
                    Our goal is to provide a great service to the companies operating in the online entertainment
                    industy.
                </p>
                <p>
                    We believe strongly in our clients products and we deeply and seemlesly entertwine our product and
                    service with theirs.
                </p>
                <p>
                    Our daily bread is developing custom software solutions, creation of online marketing campaigns,
                    promote and support the customers brand.
                </p>
                <p>Forge out of our customers complicated problems new challenges for us.</p>
                <p>Create new services and solutions that the industry has not seen yet.</p>
            </div>
            <img style={{ borderRadius: "10%" }} src={mypic.src} alt="Picture of team" />
        </div>
    );
};

export default Team;
