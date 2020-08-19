import { createStore, applyMiddleware } from 'redux'
import rootReducer from '@reducers'
import thunk from 'redux-thunk'

export default ({ initialState} = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk))
  return store
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`)
  console.log('will dispatch:', action)
  console.log('state', getState())

  const nextAction = next(action) //chama o proximo middleware => thunk
  
  console.log('next state', getState())
  console.groupEnd(`LOGGER->${action.type}`)
  return nextAction
}
  


