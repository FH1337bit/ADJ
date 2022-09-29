import styles from "../Work/index.module.scss";

const Work = () => {
    return (
        <div id="work" className={styles.work}>
            <div className={styles.header}>
                <h3>OUR PILLARS</h3>
                <h1>The Azar Elite core</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.section1}>
                    <div className={styles.title_holder}>
                        <span className={styles.title}>VISION</span>
                    </div>
                    <p>
                        V To live in a world where our company and work is seen as a positive example and role model for
                        others.
                    </p>
                </div>
                <div className={styles.section2}>
                    <div className={styles.title_holder}>
                        <span className={styles.title}>MISSION</span>
                    </div>
                    <p>M To help to bring value to the online community of the world.</p>
                </div>
                <div className={styles.section3}>
                    <div className={styles.title_holder}>
                        <span className={styles.title}>VALUES</span>
                    </div>
                    <p>
                        V No mediocre work. <br /> Do not compromise, negotiate effetively instead.
                        <br /> Stay openminded.
                        <br /> Strive toward the ideals of good.
                        <br /> Tell the truth or at least do not lie.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;
