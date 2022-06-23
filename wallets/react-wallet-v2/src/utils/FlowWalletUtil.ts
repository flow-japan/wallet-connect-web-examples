import FlowLib from '@/lib/FlowLib'

export let wallet1: FlowLib
export let wallet2: FlowLib
export let flowWallets: Record<string, FlowLib>
export let flowAddresses: string[]

let address1: string
let address2: string

/**
 * Utilities
 */
export function createOrRestoreFlowWallet() {
  const mnemonic1 = localStorage.getItem('FLOW_MNEMONIC_1')
  const mnemonic2 = localStorage.getItem('FLOW_MNEMONIC_2')

  if (mnemonic1 && mnemonic2) {
    wallet1 = FlowLib.init({ mnemonic: mnemonic1 })
    wallet2 = FlowLib.init({ mnemonic: mnemonic2 })
  } else {
    wallet1 = FlowLib.init({})
    wallet2 = FlowLib.init({})

    // Don't store mnemonic in local storage in a production project!
    localStorage.setItem('FLOW_MNEMONIC_1', wallet1.getMnemonic())
    localStorage.setItem('FLOW_MNEMONIC_2', wallet2.getMnemonic())
  }

  // TODO: This is dummy address for Flow
  address1 = wallet1.getAddress().substring(0, 18).toLowerCase()
  address2 = wallet2.getAddress().substring(0, 18).toLowerCase()

  flowWallets = {
    [address1]: wallet1,
    [address2]: wallet2
  }
  flowAddresses = Object.keys(flowWallets)

  return {
    flowWallets,
    flowAddresses
  }
}
