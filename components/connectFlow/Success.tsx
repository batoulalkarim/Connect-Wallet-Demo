import { disconnect } from "process";
import React from "react";
import styles from "../../styles/connectFlow/Success.module.scss";

type props = {
  walletOpen: boolean;
  updateStep: any;
};

const Success = ({ walletOpen, updateStep }: props) => {
  function disconnect() {
    updateStep(0);
    //disconnectWallet()
  }
  return (
    <div
      className={
        walletOpen
          ? `${styles.container} ${styles.containerOpen}`
          : styles.container
      }
    >
      <img src="/check.svg" alt="Success Check" className={styles.check} />
      <div>Wallet Connected!</div>
      <div className={styles.text}>wallet address here</div>
      <div className={styles.text}>wallet balance here ETH</div>
      <div className={styles.disconnect} onClick={() => disconnect()}>
        Disconnect
      </div>
    </div>
  );
};

export default Success;
