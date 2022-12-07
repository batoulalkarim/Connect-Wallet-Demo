import React, { useState, useEffect } from "react";
import styles from "../styles/ConnectWalletModal.module.scss";
import SelectWallet from "../components/connectFlow/SelectWallet";
import Loading from "../components/connectFlow/Loading";
import Success from "../components/connectFlow/Success";

type props = {
  walletOpen: boolean;
  setWalletOpen: React.Dispatch<React.SetStateAction<boolean>>;
  step?: number;
};

const ConnectWalletModal = ({ walletOpen, setWalletOpen, step }: props) => {
  const [walletStep, setWalletStep] = useState<number>(step ? step : 0);
  const [successful, setSuccessful] = useState(false);
  function closeModal() {
    setWalletOpen(false);
    console.log("wallet closed");
  }

  const updateStep = (step: number) => {
    setWalletStep(step);
  };

  useEffect(() => {
    if (walletStep === 1) {
      setTimeout(() => {
        updateStep(2);
      }, 2000);
    }
  }, [walletStep]);

  return (
    <div
      className={
        walletOpen
          ? `${styles.container} ${styles.containerOpen}`
          : styles.container
      }
    >
      <div
        className={styles.close}
        onClick={(event: any) => {
          event.stopPropagation();
          closeModal();
        }}
      >
        <img src={walletOpen ? "/close.png" : ""} alt="" />
      </div>
      {walletStep === 0 && (
        <SelectWallet walletOpen={walletOpen} updateStep={updateStep} />
      )}
      {walletStep === 1 && <Loading />}
      {walletStep === 2 && (
        <Success walletOpen={walletOpen} updateStep={updateStep} />
      )}
    </div>
  );
};

export default ConnectWalletModal;
