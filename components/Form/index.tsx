/* eslint-disable @next/next/no-img-element */
import styles from "../Form/index.module.scss";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

const Form = () => {
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        emailjs
            .send(
                "service_qgysm8e",
                "template_nw0so18",
                {
                    email: data.get("email") as string,
                    name: data.get("name") as string,
                    message: data.get("message") as string,
                },
                "oU3-WbUuCn3jMfKIX",
            )
            .then(
                result => console.log(result.text),
                error => console.log(error.text),
            );
    };

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
            </div>
        </div>
    );
};

export default Form;
