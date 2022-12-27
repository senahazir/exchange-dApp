import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider, Rinkeby} from "@usedapp/core";
import { getDefaultProvider } from 'ethers';


import App from "./App";
import { DAPP_CONFIG } from "./config";

import "./index.css";

const config1 = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={DAPP_CONFIG}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);