import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x2b6dE062771a84fc4625dB7627Edd7a39E47FbFA"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/r-bqyhRDBSUf7Plw0yMsH2mQiuOJp_NI",
  },
};