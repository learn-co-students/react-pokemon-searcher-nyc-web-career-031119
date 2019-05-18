import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: "front"
  }

  handleToggle = () => {
    if (this.state.toggle === "front") {
      this.setState({
        toggle: "back"
      });
    } else {
      this.setState({
        toggle: "front"
      });
    }
  }

  render() {
    const { name, sprites, stats } = this.props.poke;
    return (
      <Card onClick={this.handleToggle}>
        <div>
          <div className="image">
            <img src={sprites[this.state.toggle]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[stats.length - 1].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
