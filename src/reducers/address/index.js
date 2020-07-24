import { UPDATE_ADDRESS } from './actions'

export const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 1
}

const address = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case UPDATE_ADDRESS: return action.payload
  }
  return state
}

export default address
