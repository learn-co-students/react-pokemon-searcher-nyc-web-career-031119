import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    value: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(json => this.setState({pokemon: json}))
  }

  handleSearchChange = (e, { value }) => {
      this.setState({ value })
  }

  addPokemon = (obj) => {
    const pkmnObj = {
      name: obj.name,
      sprites: {
        front: obj.frontUrl,
        back: obj.backUrl
      },
      stats: [
        0,
        1,
        2,
        3,
        4,
        { value: obj.hp}
      ]
    }
    this.setState({pokemon: [...this.state.pokemon, pkmnObj]})
  }

  render() {
    const pkmn = this.state.pokemon.filter(pkmn => pkmn.name.toLowerCase().includes(this.state.value.toLowerCase()))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={pkmn}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
