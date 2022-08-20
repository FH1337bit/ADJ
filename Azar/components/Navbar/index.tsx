import styles from "../Navbar/index.module.scss";
import Image from "next/image";
import mypic from "../../public/azar_logo.png";

const Navbar = () => {
    return (
        <div>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Image src={mypic} alt="Picture of the author" />
                </div>
                <ul>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>WORK</li>
                    <li>CONTACT</li>
                </ul>
                {/* <button>CONTACT US</button> */}
            </div>
        </div>
    );
};

export default Navbar;
