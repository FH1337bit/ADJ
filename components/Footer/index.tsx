import styles from "../Footer/index.module.scss";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div id="footer" className={styles.footer}>
            <div className={styles.footer_quote}>Let’s build something amazing together</div>
            <div className={styles.footer_content}>
                <div className={styles.footer_column}>
                    <div className={styles.footer_header}>ADDRESS</div>
                    <div className={styles.footer_text}>Prague</div>
                    <div className={styles.footer_text}>Staré Město</div>
                    <div className={styles.footer_text}>Bílkova 855/19</div>
                    <div className={styles.footer_text}>PSČ 110 00 </div>
                </div>
                <div className={styles.footer_column}>
                    <div className={styles.footer_header}>COMPANY</div>
                    <div className={styles.footer_text}>Azar Elite, s.r.o.</div>
                    <div className={styles.footer_text}>IČO 17357446</div>
                    <div className={styles.footer_text}>info@azar-elite.com</div>
                </div>
                <div className={styles.footer_column}>
                    <div className={styles.footer_header}>SOCIAL MEDIA</div>
                    <div className={styles.footer_text}>
                        <a href="https://facebook.com">FACEBOOK</a>
                        <div className={styles.icon}>
                            <BsFacebook size={20} />
                        </div>
                    </div>
                    <div className={styles.footer_text}>
                        <a href="https://linkedin.com">LINKEDIN</a>
                        <div className={styles.icon}>
                            <BsLinkedin size={20} />
                        </div>
                    </div>
                    <div className={styles.footer_text}>
                        <a href="https://twitter.com">TWITTER</a>
                        <div className={styles.icon}>
                            <BsTwitter size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyright}>© Azar Elite s.r.o</div>
        </div>
    );
};

export default Footer;
