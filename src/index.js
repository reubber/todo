import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGER will dispatch:', action)
  const nextAction = next(action)
  console.log('LOGER next action', nextAction)
  return nextAction
}

const store = createStore(reducer, applyMiddleware(logger))
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
