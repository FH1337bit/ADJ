import styles from "../ScrollText/index.module.scss";

const ScrollText = () => {
    return (
        <div className={styles.scrolling_words_container}>
            <div className={styles.scrolling_words_box}>
                <ul>
                    <li></li>
                    <li style={{ color: "#ea4335" }}>OBTAIN SKILLS</li>
                    <li style={{ color: "#4285f4" }}>APPLY KNOWLEDGE</li>
                    <li style={{ color: "#34a853" }}>CREATE CODE</li>
                    <li style={{ color: "#fbbc04" }}>DESIGN SITE</li>
                    <li style={{ color: "#ea4335" }}>BE SUCCESFULL</li>
                </ul>
            </div>
            <div className={styles.text_box}>
                <label>WITH AZAR ELITE</label>
            </div>
        </div>
    );
};

export default ScrollText;
