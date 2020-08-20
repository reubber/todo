import React from 'react'
import { connect } from 'react-redux'
import SearchCep from './search-cep'

import { fetchAddress } from '@reducers/address/actions-creators'

const SearchCepContainer = ({ address, handleSubmit}) => {  
 
    return (
      <SearchCep 
      {...address}
      handleSubmit={handleSubmit}
       />
    )
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps =(dispatch)=> ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))   
  }

})


export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
