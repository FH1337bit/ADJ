import styles from "../Footer/index.module.scss";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <label>Azar Elite, s.r.o.</label>
                <label>Praha - Staré Město, Bílkova 855/19</label>
                <label>PSČ 110 00 </label>
                <label>IČO 17357446</label>
            </div>
            <div className={styles.footer_socials}>
                <a href="facebook.com">
                    <BsFacebook size={32} />
                </a>
                <a href="instagram.com">
                    <BsInstagram size={32} />
                </a>
                <a href="twitter.com">
                    <BsTwitter size={32} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
