import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  toggleSprite = () => {
    this.setState({
      front: !this.state.front
    });
  }

  render() {
    let { name, sprites:{front,back} } = this.props.pokemon;
    let hp = this.props.pokemon.stats.filter(stat => stat.name === 'hp').value;

    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleSprite}>
            <img src={this.state.front ? front : back} alt="oh no!" />
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
