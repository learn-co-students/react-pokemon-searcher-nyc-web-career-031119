import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {side:true}

  toggleCard = () =>{
    if (this.state.side === true){
      this.setState({side:false})
    }
    else if (this.state.side === false)
    { this.setState({side:true})}
  }

  render() {
    const pokemon = this.props.pokemon
    const hp = pokemon.stats[pokemon.stats.length - 1].value
      if (this.state.side === false){
        return (
        <Card >
        
          <div onClick={this.toggleCard}>
            <div className="image">
              <img src={ pokemon.sprites.back} alt="oh no!" />
            </div>
            <div className="content">
              <div className="header">{pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                hp: {hp}
              </span>
            </div>
          </div>
        </Card>
      )}
      else {return (
        <Card >
          <div onClick={this.toggleCard}>
            <div className="image">
              <img src={ pokemon.sprites.front} alt="oh no!" />
            </div>
            <div className="content">
              <div className="header">{pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                hp: {hp}
              </span>
            </div>
          </div>
        </Card>
      )}
  }
}

export default PokemonCard
