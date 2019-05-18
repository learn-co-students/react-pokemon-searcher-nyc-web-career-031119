import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generateCards = () => {
    return this.props.pokemon.map(poke => {
      return <PokemonCard key={poke.id} poke={poke} />
    });
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.generateCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
