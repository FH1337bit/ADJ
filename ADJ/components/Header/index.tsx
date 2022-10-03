/* eslint-disable @next/next/no-img-element */
import styles from "../Header/index.module.scss";
import logo from "../../images/ADJ_logo.png";
import hamburger from "../../images/hamburger.png";
const Header = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.navbar}>
                <div className={styles.hamburger_box}>
                    <img src={hamburger.src} style={{ width: "4vw", height: "5vh" }} alt="Hamburger" />
                    <label>MENU</label>
                </div>
                <div className={styles.joinus}>
                    <label>JOIN US</label>
                </div>
            </div>
            <div className={styles.logo}>
                <img src={logo.src} style={{ width: "14vw", height: "23vh" }} alt="ADJ" />
                <h1>Your partner in iGaming</h1>
                <div className={styles.separator}></div>
                <h2>Join our journey together in gaming world. </h2>
                <button>Talk to us</button>
            </div>
        </div>
    );
};

export default Header;
