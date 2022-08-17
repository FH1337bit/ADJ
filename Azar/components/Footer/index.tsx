import styles from "../Footer/index.module.scss";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <label>Azar Elite, s.r.o.</label>
            <label>Praha - Staré Město, Bílkova 855/19</label>
            <label>PSČ 110 00 </label>
            <label>IČO 17357446</label>
            <label>
                <BsFacebook />
            </label>
            <label>
                <BsInstagram />
            </label>
            <label>
                <BsTwitter />
            </label>
        </div>
    );
};

export default Footer;
