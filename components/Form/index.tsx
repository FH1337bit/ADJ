/* eslint-disable @next/next/no-img-element */
import styles from "../Form/index.module.scss";
import email from "../../images/email.svg";
import Image from "next/image";

const Form = () => {
    return (
        <div className={styles.form}>
            <div className={styles.bottom_text}>
                <h1>GET IN TOUCH</h1>
                <h2>We are looking forward to start a project with you!</h2>
                <h3>Contact us we will respond as soon as possible.</h3>
            </div>

            <div className={styles.content}>
                <div className={styles.inputs}>
                    <div className={styles.inputs_box}>
                        <input className={styles.input} placeholder="Insert your email" aria-label="email" />
                        <input className={styles.input} placeholder="Insert your fullname" aria-label="name" />
                        <input
                            className={styles.input}
                            style={{ height: "8vh", borderRadius: "30px" }}
                            placeholder="Insert your message"
                            aria-label="message"
                        />
                    </div>
                    <button className={styles.button}>Submit</button>
                </div>
                <div className={styles.email_box}>
                    <div className={styles.email}>
                        <Image src={email} alt="email" />
                    </div>
                    <h4>ADJ-CONSULTING@GMAIL.COM</h4>
                </div>
            </div>
        </div>
    );
};

export default Form;
