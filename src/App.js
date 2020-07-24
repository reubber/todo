import React from 'react'
import Form from '@components/form'
import TodosList from '@components/todos-list'
import Filter from '@components/filter'
import SearchCep from '@components/search-cep'

import 'milligram'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
    <div>
      <h2>TODO</h2>
      <Form />
      <TodosList />
      <Filter />
    </div>

    <div>
      <h2>CEP</h2>
      <SearchCep />
    </div>
  </div>
)

export default App
