import React from 'react'
import { Card } from 'semantic-ui-react'


//state should be where the change is happening!!!!!!!
// what this.setState does is that it allows you to accessign the key inside the state objext and accessigning it a new value

class PokemonCard extends React.Component {

  state = {
    displayFront: true
  }

  handleClick = () => {
    this.setState({displayFront: !this.state.displayFront})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
      //render image inside of the img tag with src
            <img alt="oh no!"
            src={this.state.displayFront ?
            this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} onClick={this.handleClick} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
    //use find to get the hp and the value
              {this.props.pokemon.stats.find(stat => {
                return stat.name === 'hp'
              }).value}Hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
