import styles from "../Work/index.module.scss";

const Work = () => {
    return (
        <div className={styles.work}>
            <div className={styles.header}>
                <h3>OUR PILLARS</h3>
                <h1>The Azar Elite core</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.section1}>
                    <h2>VISION</h2>
                    <p>
                        V To live in a world where our company and work is seen as a positive example and role model for
                        others.
                    </p>
                </div>
                <div className={styles.section2}>
                    <h2>MISSION</h2>
                    <p>M To help to bring value to the online community of the world.</p>
                </div>
                <div className={styles.section3}>
                    <h2>TARGET</h2>
                    <p>
                        T No mediocre work and do not compromise, negotiate effetively instead. Stay openminded. Strive
                        toward the ideals of good. Tell the truth or at least do not lie.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;
