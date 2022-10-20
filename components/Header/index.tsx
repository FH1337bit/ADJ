/* eslint-disable @next/next/no-img-element */
import styles from "../Header/index.module.scss";
import logo from "../../images/logo.png";
import arrow from "../../images/arrow.png";
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.menu}>
            {/* <div className={styles.navbar}>
                <div className={styles.hamburger_box}>
                    <Image src={hamburger} alt="Hamburger" />
                    <label>MENU</label>
                </div>
                 <div className={styles.joinus}>
                    <label>JOIN US</label>
                </div> 
            </div> */}
            <div className={styles.logo}>
                <Image src={logo} alt="ADJ" />
                <h1>
                    Your partner in <b style={{ color: "#dec2ba" }}>iGaming</b>
                </h1>
                <div className={styles.separator}></div>
                <h2>Join our journey together in gaming world. </h2>

                <button>
                    <a href="#form">Talk to us</a>
                </button>
                <div className={styles.arrow}>
                    <Image src={arrow} alt="ADJ" />
                </div>
            </div>
        </div>
    );
};

export default Header;
