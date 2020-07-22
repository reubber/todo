import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const cep = e.target.cep.value
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: cep })
    this.setState(response)
    console.log(response)

  }

  render () {
    return (
      <SearchCep 
      {...this.state}
      handleSubmit={this.handleSubmit}
       />
    )
  }
}

export default SearchCepContainer
