/* eslint-disable @next/next/no-img-element */
import styles from "../Help/index.module.scss";

const Help = () => {
    return (
        <div className={styles.help}>
            <div className={styles.help_header}>
                <h1>HOW WE CAN HELP YOU?</h1>
                <h2>Long-term partnership</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.content_box}>
                    <div>
                        <h4> START UP ADVISORY</h4>
                        <h4> OPERATIONS LICENSING </h4>
                        <h4> CASINO PRODUCT STRATEGY </h4>
                        <h4> PRODUCT INNOVATION</h4>
                        <h4> PLAYER UX REVIEW</h4>
                    </div>
                </div>
                <div className={styles.content_box}>
                    <div>
                        <h4> COMMERCIAL NEGOTIATIONS</h4>
                        <h4> PARTNERSHIP INTRODUCTIONS </h4>
                        <h4> LICENSE PROCUREMENT</h4>
                        <h4> PRODUCT CERTIFICATION </h4>
                        <h4> CONSULTING </h4>
                    </div>
                </div>
            </div>
            <div className={styles.label}>
                <h2>We aim to help other to achieve their ambitions and dreams in business </h2>
            </div>
        </div>
    );
};

export default Help;
