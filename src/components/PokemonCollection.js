import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
  ///iterate over the array of pokemons and render the cards
        {this.props.pokemons.map(pokemon => {
  /// here we are passing the whole pokemon object to the pokemon card
  //and will manipulate in there
          return <PokemonCard pokemon={pokemon} />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
