import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {pokemon: [],
            search: ""
          }


  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(pokemon => {this.setState({pokemon})})
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
    console.log(value)
  }

  handleForm = (form) => {
    let newPokemon = {
      name: form.name,
      sprites: {
        front: form.frontUrl,
        back: form.backUrl
      },
      stats: [{
        name: "hp",
        value: form.hp
      }]
    }
  this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }

  render() {
    // console.log(this.state.pokemon)
    const filtered = this.state.pokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={ _.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.handleForm}/>
        <br />
        <PokemonCollection pokemon={filtered}/>
        <br />
      </div>
    )
  }
}

export default PokemonPage
