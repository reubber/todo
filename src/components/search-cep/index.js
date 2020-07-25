import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'
import { updateAddressFunc } from '@reducers/address/actions-creators'

class SearchCepContainer extends PureComponent {
  
  state = {
    isFetching: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: cep })
    
    this.setState({ isFetching: false })
    this.props.updateAddress(response)
   
  }

  render () {
    return (
      <SearchCep 
      {...this.state}
      {...this.props.address}
      handleSubmit={this.handleSubmit}
       />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  updateAddress: (data) => dispatch(updateAddressFunc(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
