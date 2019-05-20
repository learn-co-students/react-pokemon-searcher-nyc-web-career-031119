import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: this.state.hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      this.props.addPokemon(data)
    })//end then
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} fluid label="Name" placeholder="Name" name="name" onChange={this.handleInput}/>
            <Form.Input value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInput}/>
            <Form.Input value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleInput}/>
            <Form.Input value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleInput}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
