import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchedTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then (r => r.json())
    .then (data => {
      this.setState({pokemons: data})
    })
  }

  handleSearch = (event) => {
    this.setState({searchedTerm: event.target.value})
  }
  filterPokemon = () =>{
    return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchedTerm.toLowerCase()))
  }
  createPokemon = (pokemon) =>{
    this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} value={this.state.searchedTerm} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
