import { ChainsMap } from "caip-api";
import { NamespaceMetadata, ChainMetadata } from "../helpers";

// TODO: add `flow` namespace to `caip-api` package to avoid manual specification here.
export const FlowChainData: ChainsMap = {
  "mainnet": {
    id: "flow:mainnet",
    name: "Flow Mainnet",
    rpc: ["https://flowscan.org"],
    slip44: 539,
    testnet: false,
  },
  "testnet": {
    id: "flow:testnet",
    name: "Flow Testnet",
    rpc: ["https://testnet.flowscan.org"],
    slip44: 539,
    testnet: true,
  },
};

export const FlowMetadata: NamespaceMetadata = {
  "mainnet": {
    logo: "/flow_logo.png",
    rgb: "0, 0, 0",
  },
  "testnet": {
    logo: "/flow_logo.png",
    rgb: "0, 0, 0",
  },
};

export function getChainMetadata(chainId: string): ChainMetadata {
  const reference = chainId.split(":")[1];
  const metadata = FlowMetadata[reference];
  if (typeof metadata === "undefined") {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}
