import React from 'react'

const SearchCep = () => (
  <div>
    <form>
      <input type='text' name='cep' />
      <button type='submit'>Buscar endereço</button>
    </form>

    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>8080888</td>
          <td>Rua tv</td>
          <td>Bairrp</td>
          <td>boa viagem</td>
          <td>Estado</td>
        </tr>
      </tbody>
    </table>

  </div>
)

export default SearchCep
