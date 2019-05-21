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

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.setState ({ name: '', hp:'', frontUrl:'', backUrl:''})
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, body: JSON.stringify({
        name: this.state.name,
        stats: [{
          value: this.state.hp,
          name: 'hp'
        }],
        sprites:
          {
            front: this.state.frontUrl,
            back: this.state.backUrl
          },
      })
    })
    .then(res => res.json())
    .then(data => {
        this.props.createPokemon(data)
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid value={this.state.name} onChange={this.handleChange} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid value={this.state.hp} onChange={this.handleChange} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid value={this.state.frontUrl} onChange={this.handleChange} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid value={this.state.backUrl} onChange={this.handleChange} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
