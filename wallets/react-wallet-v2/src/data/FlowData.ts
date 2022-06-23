/**
 * Types
 */
export type TFlowChain = keyof typeof FLOW_MAINNET_CHAINS

/**
 * Chains
 */
export const FLOW_MAINNET_CHAINS = {
  'flow:mainnet': {
    chainId: 'mainnet',
    name: 'Flow',
    logo: '/chain-logos/flow-mainnet.png',
    rgb: '180, 255, 210',
    rpc: ''
  }
}

export const FLOW_TESTNET_CHAINS = {
  'flow::testnet': {
    chainId: 'testnet',
    name: 'Flow Testnet',
    logo: '/chain-logos/flow-mainnet.png',
    rgb: '180, 255, 210',
    rpc: ''
  }
}

export const FLOW_CHAINS = { ...FLOW_MAINNET_CHAINS, ...FLOW_TESTNET_CHAINS }

/**
 * Methods
 */
export const FLOW_SIGNING_METHODS = {
  FLOW_SIGN_TRANSACTION: 'flow_signTransaction',
  FLOW_SIGN_MESSAGE: 'flow_signMessage'
}
