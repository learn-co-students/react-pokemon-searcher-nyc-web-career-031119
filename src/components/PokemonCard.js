import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
state = {
  displayFront: true
}

handleClick = () => {
  this.setState({displayFront: !this.state.displayFront})
}

  render() {
    const {name, sprites: {front, back}} = this.props.pokemon
    const hp = this.props.pokemon.stats.find(stat => stat.name ==='hp').value
    return (

      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt='oh no!' src={this.state.displayFront? front : back} />
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
