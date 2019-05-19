import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {sprite: "front"}

  renderSprite = () => {
    this.state.sprite === "front" ? this.setState({sprite: "back"}) : this.setState({sprite: "front"})
  }

  hpCalc = () => {
    return (this.props.pokemon.stats[5].value) * 2 + 110 + 31 + 63
  }

  render() {

    return (
      <Card>
        <div onClick={this.renderSprite}>
          <div className="image">
            <img src={this.state.sprite === "front" ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">Lvl 100 {this.props.pokemon.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP : {this.hpCalc()}
              <br></br>
              <small>Max EVs, Max IVs</small>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
