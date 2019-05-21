import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    displayFront: true
  };

  handleClick = () => {
    this.setState(prevState => ({
      displayFront: !prevState.displayFront
    }))
  };

  render() {
    const {name, sprites: {back, front}} = this.props.pokemon;
    const hp = this.props.pokemon.stats.find(stat => stat.name === 'hp').value;

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.displayFront ? front : back} onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
