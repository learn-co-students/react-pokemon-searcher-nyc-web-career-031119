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
    this.setState({name: e.target.name})
  }


//submitting to the backend
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/pokemon`), {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
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
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} onChange={this.handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input value={this.state.hp}onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input value={this.state.frontUrl}onChange={this.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input value={this.state.backUrl}onChange={this.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
