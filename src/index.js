import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import configureStore from './redux-flow/configure-store'

const store = configureStore() //é possivel passar initial state atravez da funcao confiureStore

store.dispatch((dispatch, getState) => {
  console.log('async dispatch', dispatch, getState) //uma funcao nao é aceita 
  //normalmente pelo redux mas com redux thunk ele deve aceitar
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
