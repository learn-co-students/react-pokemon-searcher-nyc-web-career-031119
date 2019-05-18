import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const POKE_URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(POKE_URL)
    .then(res => res.json())
    .then(pokes => {
      this.setState({pokemon: pokes})
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  addNewPokemon = (formInfoObj) => {
    let formData = {
      id: this.state.pokemon.length + 1,
      name: formInfoObj.name,
      stats: [
        {
          name: "hp",
          value: formInfoObj.hp
        }
      ],
      sprites: {
        front: formInfoObj.frontUrl,
        back: formInfoObj.backUrl
      }
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(POKE_URL, configObj)
    .then(res => res.json())
    .then(poke => {
      this.setState(function(state, props) {
        return {
          pokemon: [...this.state.pokemon, poke]
        }
      })
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })
  }

  render() {
    const filteredPokes = this.state.pokemon.filter(poke => {
      return poke.name.includes(this.state.searchTerm);
    });
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleChange} value={this.state.searchTerm} />
        <br />
        <PokemonCollection pokemon={filteredPokes}/>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
      </div>
    )
  }
}

export default PokemonPage
