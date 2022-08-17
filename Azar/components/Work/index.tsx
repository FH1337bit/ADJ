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
                        Phasellus rhoncus. Praesent vitae arcu tempor neque lacinia pretium. Duis ante orci, molestie
                        vitae vehicula venenatis, tincidunt ac pede. Donec ipsum massa, ullamcorper in, auctor et,
                        scelerisque sed, est. Vivamus luctus egestas leo. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                    </p>
                </div>
                <div className={styles.section3}>
                    <h2>TARGET</h2>
                    <p>
                        Curabitur sagittis hendrerit ante. Nulla est. Proin pede metus, vulputate nec, fermentum
                        fringilla, vehicula vitae, justo. Nullam lectus justo, vulputate eget mollis sed, tempor sed
                        magna. Phasellus faucibus molestie nisl. Aenean placerat. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;
