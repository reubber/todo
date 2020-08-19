import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGER will dispatch:', action)
  const nextAction = next(action) //chama o proximo middleware => thunk
  console.log('LOGER next action', nextAction)
  return nextAction
}

const thunk = ({ dispatch, getState}) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch)
  }
  return next(action)
}

const store = createStore(reducer, applyMiddleware(logger, thunk))

store.dispatch(lazyAction())
function lazyAction () {
  return (dispatch) => {
    dispatch({
      type: 'todos:ADD_TODO',
      payload: {
        text:'Lazy action',
        id: '123'
      }
    })
  }
}

const renderState = () => {
  console.log('state: ', store.getState())
}

store.subscribe(renderState)
renderState()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
