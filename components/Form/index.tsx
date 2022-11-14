import styles from "../Form/index.module.scss";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import adjlogo from "../../images/logo.png";
import Image from "next/image";

const Form = () => {
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        emailjs
            .send(
                "service_kuuep25_ADJ",
                "template_ktj92fk",
                {
                    email: data.get("email") as string,
                    name: data.get("name") as string,
                    message: data.get("message") as string,
                },
                "eBWLnz0v6kNYq1vMb",
            )
            .then(
                result => {
                    console.log(result.text);
                    alert("Email was sended...");
                },
                error => console.log(error.text),
            );
    };

    return (
        <div id="form" className={styles.form}>
            <div className={styles.bottom_text}>
                <h1>GET IN TOUCH</h1>
                <h2>We are looking forward to start a project with you!</h2>
                <h3>Contact us we will respond as soon as possible.</h3>
            </div>

            <div className={styles.content}>
                <div className={styles.inputs}>
                    <div className={styles.inputs_box}>
                        <form ref={form} onSubmit={handleSubmit}>
                            <input
                                className={styles.input}
                                placeholder="Insert your email"
                                name="email"
                                aria-label="email"
                            />
                            <input
                                className={styles.input}
                                placeholder="Insert your fullname"
                                name="name"
                                aria-label="name"
                            />
                            <input
                                className={styles.input}
                                name="message"
                                style={{ height: "8vh", borderRadius: "30px" }}
                                placeholder="Insert your message"
                                aria-label="message"
                            />
                            <input className={styles.button} type="submit" value="Send email" />
                        </form>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Image src={adjlogo} alt="adjlogo" />
                </div>
            </div>
        </div>
    );
};

export default Form;
