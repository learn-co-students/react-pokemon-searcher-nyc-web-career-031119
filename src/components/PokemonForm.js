import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleInputChange = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
     e.preventDefault();

    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    });

     fetch('http://localhost:3000/pokemon',{
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-type': 'application/json'
       },
       body: JSON.stringify({
         name: this.state.name,
         stats: [
           {
             value: this.state.hp,
             name:  'hp'
           }
         ],
         sprites: {
           front: this.state.frontUrl,
           back: this.state.backUrl
         }
       })
     })
       .then(r => r.json())
       .then(data => {
         this.props.createPokemon(data);
         console.log(data)
       })

  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} onChange={this.handleInputChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input value={this.state.hp} onChange={this.handleInputChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input value={this.state.frontUrl} onChange={this.handleInputChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input value={this.state.backUrl} onChange={this.handleInputChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
