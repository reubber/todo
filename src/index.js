import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'

const initialState = {
  todos: [{
    text: '@reubbers',
    id: '123',
    completed: true
  }],

  address: {
    address: 'Rua agronomando rangel 013-A',
    city: 'Boa Viagem',
    code: '63870-000',
    district: 'Centro',
    state: 'CE',
    status: 200
  }
}

const store = createStore(reducer, initialState)
const renderState = () => {
  console.log('state: ', store.getState())
}

store.subscribe(renderState, initialState)
renderState()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
