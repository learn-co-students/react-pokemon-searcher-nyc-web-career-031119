import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showImg: true
  }

  handleClick = (e) =>{
    this.setState({showImg: !this.state.showImg})
  }


  render() {
    console.log(this.state);
    console.log( this.props.pokemon.stats);
    // debugger
    const {name, sprites:{front, back}} = this.props.pokemon
    const hp = this.props.pokemon.stats.find(stat => stat.name === 'hp').value

      // console.log(name, front, back, hp);
    return (
      <Card>
        <div>
          <div className="image"  onMouseEnter={this.handleClick} onMouseLeave={this.handleClick}>
             <img alt="oh no!" src={this.state.showImg ? front : back }/>
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
