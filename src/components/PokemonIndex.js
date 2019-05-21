import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

//the initial state
  state = {
    pokemons: [],
    term: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(data => {
  // console.log(data)
  //it accesses the key and updates its value on render
      this.setState({
        pokemons: data
      })
    })
  }

  filterPokemon = () => {
    return this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.term.toLowerCase())
    })
  }



//for a form you need to take in an event
//change the set up state
  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({term: e.target.value})
  }
//we watch to fetch here because we start at the highest level in order to have
//the data available to the other layers

//when you have state you have a class based component,
//when you;re not dealing with state you have a function based component

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch}
          value={this.state.term}
         showNoResults={false} />
        <br />
        //lets pass the pokemon to the pokemon collection
        <PokemonCollection pokemons={this.filterPokemon()} />
        <br />
        <PokemonForm  />
      </div>
    )
  }
}

export default PokemonPage
