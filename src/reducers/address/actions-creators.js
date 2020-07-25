import { UPDATE_ADDRESS } from './actions'

export const updateAddressFunc = (data) => {
  return {
    type: UPDATE_ADDRESS,
    payload: data
  }
}
