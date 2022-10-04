/* eslint-disable @next/next/no-img-element */
import styles from "../Ideas/index.module.scss";
import strategies from "../../images/strategies.svg";
import plans from "../../images/plans.svg";
import Image from "next/image";

const Ideas = () => {
    return (
        <div className={styles.ideas}>
            <div className={styles.ideas_header}>
                <h1>IDEAS</h1>
                <h4>
                    We can bring to you new ideas you did not explore. Or we expand on your thoughts and propose
                    executions.
                </h4>
            </div>
            <div className={styles.content}>
                <div className={styles.content_box}>
                    <div className={styles.icons}>
                        <Image src={strategies} alt="strategies" />
                        <h3>STRATEGIES</h3>
                    </div>
                    <h4>
                        Based on your needs we can propose time proven strategies. Or generate original ideas that can
                        surprise the market.
                    </h4>
                </div>
                <div className={styles.content_box}>
                    <div className={styles.icons}>
                        <Image src={plans} alt="plans" />
                        <h3>PLANS</h3>
                    </div>
                    <h4>
                        Once you know what is your goal, we can put in place specific execution plans. With roadmaps and
                        solutions that are tailored to your needs.
                    </h4>
                </div>
            </div>
            <h2>ADJ CONSULTING EXPERTS IN IGAMING</h2>
        </div>
    );
};

export default Ideas;
