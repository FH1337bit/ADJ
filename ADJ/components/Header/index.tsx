/* eslint-disable @next/next/no-img-element */
import styles from "../Header/index.module.scss";
import logo from "../../images/ADJ_Logo.png";
import hamburger from "../../images/hamburger.png";
import Image from "next/image";
const Header = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.navbar}>
                <div className={styles.hamburger_box}>
                    <Image src={hamburger} className={styles.hamburger} width={40} height={30} alt="Hamburger" />
                    <label>MENU</label>
                </div>
                <div className={styles.joinus}>
                    <label>JOIN US</label>
                </div>
            </div>
            <div className={styles.logo_box}>
                <Image src={logo} className={styles.logo} alt="ADJ" />
                <h1>Your partner in iGaming</h1>
                <div className={styles.separator}></div>
                <h2>Join our journey together in gaming world. </h2>
                <button>Talk to us</button>
            </div>
        </div>
    );
};

export default Header;
