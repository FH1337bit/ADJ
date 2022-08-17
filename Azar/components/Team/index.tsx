import styles from "../Team/index.module.scss";
import Image from "next/image";
import mypic from "../../images/img2.jpg";

const Team = () => {
    return (
        <div className={styles.about}>
            <div className={styles.img}>
                <Image src={mypic} alt="About" />
            </div>
            <div className={styles.content}>
                <h3>TEAM</h3>
                <h1>Who we do</h1>
                <p>
                    Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis
                    faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
                    ullamcorper gravida tellus ut consequat.
                </p>
            </div>
        </div>
    );
};

export default Team;
