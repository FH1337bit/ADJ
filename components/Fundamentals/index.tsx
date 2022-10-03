/* eslint-disable @next/next/no-img-element */
import styles from "../Fundamentals/index.module.scss";
import fundamentals from "../../images/fundamentals.png";
import Image from "next/image";

const Fundamentals = () => {
    return (
        <div className={styles.fundamentals}>
            <h1>FUNDAMENTALS</h1>
            <div className={styles.content}>
                <div className={styles.content_box}>
                    <h3> CASINO</h3>
                    <h3> CRYPTO</h3>
                    <h3> MONEY</h3>
                    <h3> DESIGN</h3>
                    <h3> DEVELOPMENT</h3>
                    <h3> LICENSING</h3>
                    <h3> LEGAL</h3>
                    <h3> CERTIFICATION</h3>
                </div>
                <div className={styles.content_box}>
                    <Image src={fundamentals} alt="Fundamentals" />
                </div>
            </div>
            <h2>Knowledge is not for self but for all . . .</h2>
        </div>
    );
};

export default Fundamentals;
