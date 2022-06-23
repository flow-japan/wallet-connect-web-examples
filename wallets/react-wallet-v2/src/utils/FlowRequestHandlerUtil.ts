import { FLOW_SIGNING_METHODS } from '@/data/FlowData'
import { getWalletAddressFromParams } from '@/utils/HelperUtil'
import { flowAddresses, flowWallets } from '@/utils/FlowWalletUtil'
import { formatJsonRpcError, formatJsonRpcResult } from '@json-rpc-tools/utils'
import { SignClientTypes } from '@walletconnect/types'
import { ERROR } from '@walletconnect/utils'

export async function approveFlowRequest(
  requestEvent: SignClientTypes.EventArguments['session_request']
) {
  const { params, id } = requestEvent
  const { request } = params
  const wallet = flowWallets[getWalletAddressFromParams(flowAddresses, params)]

  switch (request.method) {
    case FLOW_SIGNING_METHODS.FLOW_SIGN_MESSAGE:
      // TODO:
      // const signedMessage = await wallet.signMessage(request.params.message)
      const signedMessage = '12345678'
      console.log(signedMessage);
      const res = formatJsonRpcResult(id, signedMessage)
      console.log(res)
      return res

    case FLOW_SIGNING_METHODS.FLOW_SIGN_TRANSACTION:
      // const signedTransaction = await wallet.signTransaction(
      //   request.params.feePayer,
      //   request.params.recentBlockhash,
      //   request.params.instructions
      // )
      // TODO:
      return formatJsonRpcResult(id, { message: { some: "response" } })

    default:
      throw new Error(ERROR.UNKNOWN_JSONRPC_METHOD.format().message)
  }
}

export function rejectFlowRequest(request: SignClientTypes.EventArguments['session_request']) {
  const { id } = request

  return formatJsonRpcError(id, ERROR.JSONRPC_REQUEST_METHOD_REJECTED.format().message)
}
