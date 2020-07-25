
import { expect } from 'chai'
import address from './index'
import { UPDATE_ADDRESS } from './actions'
import deepFreeze from 'deep-freeze'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should update UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Rua Maranhão - até 1533',
      city: 'Curitiba',
      code: '80610-000',
      district: 'Água Verde',
      state: 'PR',
      status: 1
    }
  })

  const after = {
    address: 'Rua Maranhão - até 1533',
    city: 'Curitiba',
    code: '80610-000',
    district: 'Água Verde',
    state: 'PR',
    status: 1
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
