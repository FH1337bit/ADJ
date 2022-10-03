/* eslint-disable @next/next/no-img-element */
import styles from "../OurTeam/index.module.scss";
import ceo from "../../images/ceo.png";
import Image from "next/image";

const OurTeam = () => {
    return (
        <div className={styles.ourteam}>
            <div className={styles.profile}>
                <h1>OUR TEAM</h1>
                <h3>
                    We are a group of professionals that have a combined experience of 35 years in iGaming. Each group
                    member is a focused specialist for different challenges our clients present us.
                </h3>
                <div className={styles.profile_image}>
                    <Image src={ceo} alt="CEO" />
                    <div className={styles.profile_text}>
                        <h2 style={{ color: "#dec2ba" }}>Jan Urbanec</h2>
                        <h2>https://www.linkedin.com/in/jan-urbanec-629a05a5/</h2>
                        <h2 style={{ color: "#dec2ba" }}>General Partner</h2>
                    </div>
                </div>
                <h3>CEO, Sales Director and product manager with over 10 years of experience in gaming world.</h3>
            </div>
            <div className={styles.content}>
                <h2>Past experiences and skills of our team include</h2>
                <h3>Slot games design and production</h3>
                <h3>Games sales and distribution</h3>
                <h3>Negotiations, drafts and revisions of agreements</h3>
                <h3>Licensing and certification of iGaming software</h3>
                <h3>Worldwide network building</h3>
                <h3>Team management</h3>
            </div>
        </div>
    );
};

export default OurTeam;