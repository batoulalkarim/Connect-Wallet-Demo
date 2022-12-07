import React from "react";
import styles from "../../styles/connectFlow/SelectWallet.module.scss";
import Button from "../reusable/Button";

type props = {
  walletOpen: boolean;
  updateStep: any;
};

const SelectWallet = ({ walletOpen, updateStep }: props) => {
  return (
    <div
      className={
        walletOpen
          ? `${styles.container} ${styles.containerOpen}`
          : styles.container
      }
    >
      <div className={styles.topHalf}>Select Your Wallet</div>
      <div className={styles.buttonContainer}>
        <Button
          label="Metamask"
          onClick={(event: any) => {
            updateStep(1);
            //connect wallet here
          }}
          isFullWidth={true}
          className={styles.button}
        />
        <Button
          label="Coinbase"
          onClick={(event: any) => {
            updateStep(1);
            //connect wallet here
          }}
          isFullWidth={true}
          className={styles.button}
        />
        <Button
          label="Wallet Connect"
          onClick={(event: any) => {
            updateStep(1);
            //connect wallet here
          }}
          isFullWidth={true}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default SelectWallet;
