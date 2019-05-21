import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

state = {
  pokemons: [],
  term: ''
}

componentDidMount(){
  fetch('http://localhost:3000/pokemon')
  .then(res => res.json())
  .then(data =>{
    this.setState({pokemons: data}, ()=>console.log(this.state.pokemons))
  })
}

handlesSearch = (e) => {

  console.log(e.target.value)
  this.setState({term: e.target.value})
}

createPokemon = (pokemon) =>{
  this.setState({pokemons: [...this.state.pokemons, pokemon]})

}

handlesFilter = ()=>{
  return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.term.toLowerCase()))
}

  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handlesSearch} showNoResults={false} value={this.state.term}/>
        <br />
        <PokemonCollection pokemons={this.handlesFilter()}/>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
