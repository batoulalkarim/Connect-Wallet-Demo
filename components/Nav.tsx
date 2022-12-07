import React, { useState } from "react";
import styles from "../styles/Nav.module.scss";

type props = {
  openWalletModal: any;
};

const Nav = ({ openWalletModal }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.emptySpace}></div>
      <div>Long Lost Friends Connect-Wallet Demo</div>
      <div onClick={openWalletModal}>
        <img src="/nav/walletBlue.svg" alt="wallet" />
      </div>
    </div>
  );
};
export default Nav;
