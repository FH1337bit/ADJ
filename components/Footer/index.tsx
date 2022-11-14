/* eslint-disable @next/next/no-img-element */
import styles from "../Footer/index.module.scss";
import linkedin from "../../images/linkedin.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                {/* <div className={styles.content_right_box}>
                    <div className={styles.content_box}>
                        <Image src={adjlogo} alt="adjlogo" />
                    </div>
                </div>
                <div className={styles.content_left_box}>
                    <div className={styles.content_box}>
                        <h3> ADDRESS</h3>
                        <h4> Prague</h4>
                        <h4> Staré Město</h4>
                        <h4> Bílkova 855/19</h4>
                        <h4> PSČ 110 00</h4>
                    </div>
                    <div className={styles.content_box}>
                        <h3> COMPANY</h3>
                        <h4> Azar Elite, s.r.o.</h4>
                        <h4> IČO 17357446</h4>
                        <h4> info@azar-elite.com</h4>
                    </div>
                </div> */}
            </div>
            <h2>LETS CREATE VALUE TOGHETER WITH A DJ CONSULTING</h2>
            <div className={styles.socials}>
                <h4>All rights reserved. Powered by the ADJ Consulting</h4>
                <div className={styles.socials_buttons}>
                    {/* <div className={styles.socials_button}>
                        <Image src={fb} alt="facebook" />
                    </div>
                    <div className={styles.socials_button}>
                        <Image src={insta} alt="instagram" />
                    </div> */}
                    <div className={styles.socials_button}>
                        <Link
                            key="https://www.linkedin.com/in/jan-urbanec-629a05a5/"
                            passHref
                            href="https://www.linkedin.com/in/jan-urbanec-629a05a5/">
                            <Image src={linkedin} alt="linkedin" />
                        </Link>
                    </div>
                    {/* <div className={styles.socials_button}>
                        <Image src={twitter} alt="twitter" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
