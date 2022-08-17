import styles from "../Work/index.module.scss";

const Work = () => {
    return (
        <div className={styles.work}>
            <div className={styles.header}>
                <h3>OUR PILLARS</h3>
                <h1>Work together</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.section1}>
                    <h2>VISION</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                        diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className={styles.section2}>
                    <h2>MISSION</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                        diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className={styles.section3}>
                    <h2>TARGET</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                        diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;
