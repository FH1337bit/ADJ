/* eslint-disable @next/next/no-img-element */
import styles from "../Navbar/index.module.scss";
import mypic from "../../public/azar_logo.png";

const Navbar = () => {
    return (
        <div className={styles.menu}>
            <img src={mypic.src} alt="Picture of the author" />
            <ul>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#team">TEAM</a>
                </li>
                <li>
                    <a href="#work">WORK</a>
                </li>
                <li>
                    <a href="#footer">CONTACT</a>
                </li>
            </ul>
            <button>
                <a href="https://facebook.com">CONTACT US</a>
            </button>
        </div>
    );
};

export default Navbar;
