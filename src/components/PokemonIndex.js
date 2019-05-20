import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    search: '',
    pokemons: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data
      })//end of then
    });
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  addPokemon = (data) => {
    this.setState({
      pokemons: [...this.state.pokemons, data]
    })
  }

  render() {
    let pokemons = this.state.pokemons.filter(p => {
      return p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} value={this.state.search}/>
        <br />
        <PokemonCollection pokemons={pokemons}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage;
