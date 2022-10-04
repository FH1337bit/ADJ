/* eslint-disable @next/next/no-img-element */
import styles from "../Fundamentals/index.module.scss";
import fundamentals from "../../images/fundamentals.png";
import Image from "next/image";

const Fundamentals = () => {
    return (
        <div className={styles.fundamentals}>
            <div className={styles.header}>
                <h4>OUR</h4>
                <h1>FUNDAMENTALS</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.content_box}>
                    <h3 style={{ color: "white" }}> CASINO</h3>
                    <h3 style={{ color: "#dec2ba" }}> CRYPTO</h3>
                    <h3 style={{ color: "white" }}> MONEY</h3>
                    <h3 style={{ color: "#dec2ba" }}> DESIGN</h3>
                    <h3 style={{ color: "White" }}> DEVELOPMENT</h3>
                    <h3 style={{ color: "#dec2ba" }}> LICENSING</h3>
                    <h3 style={{ color: "white" }}> LEGAL</h3>
                    <h3 style={{ color: "#dec2ba" }}> CERTIFICATION</h3>
                </div>
                <div className={styles.content_box}>
                    <Image src={fundamentals} alt="Fundamentals" />
                </div>
            </div>
            <div className={styles.quote}>
                <h2>Knowledge is not for self but for all</h2>
                <h3>Plato 360 BC</h3>
            </div>
        </div>
    );
};

export default Fundamentals;
