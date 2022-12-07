import React from "react";
import styles from "../../styles/connectFlow/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div>
        PLEASE WAIT <span className={styles.one}>.</span>
        <span className={styles.two}>.</span>
        <span className={styles.three}>.</span>
      </div>
    </div>
  );
};

export default Loading;
