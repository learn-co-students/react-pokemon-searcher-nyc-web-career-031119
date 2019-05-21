import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {





  render() {
    // console.log(this.props);
    const mappedCards = this.props.pokemons.map((pokemon)=>{
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        {mappedCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
