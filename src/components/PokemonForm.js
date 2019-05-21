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
  getInitialState = () => ({ name: '', hp: '', frontUrl: '', backUrl: '' })

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.createPokemon(pokemon))
      .catch(error => console.error(error))
    this.setState(this.getInitialState())
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
