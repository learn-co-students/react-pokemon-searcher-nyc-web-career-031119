import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchKeyword: ''
  };

  handleSearch = e => {
    // e.persist();
    this.setState({
      searchKeyword: e.target.value
    })
  };

  createPokemon = pokemon => {
    this.setState(prevState => ({
      pokemons: [...prevState.pokemons, pokemon]
    }))
  };

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(data => this.setState({pokemons: data}))
  }

  filterByName = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchKeyword.toLowerCase()))

  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} value={this.state.searchKeyword} />
        <br />
        <PokemonCollection pokemons={this.filterByName()}/>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
