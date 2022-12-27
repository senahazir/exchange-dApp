import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";

import styles from "../styles";

const WalletButton = () => {
  const [rendered, setRendered] = useState("");

  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  async function connect() {
    try {
       activateBrowserWallet();
    } catch (ex) {
      console.log(ex)
    }
  }
  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }


  return (
    <button
      onClick={() => {
        if (!account) {
          connect();
        } else {
          disconnect();
        }
      }}
      className={styles.walletButton}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  );
};

export default WalletButton;