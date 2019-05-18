import React from 'react'
import { Form } from 'semantic-ui-react'

const emptyState = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
}

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
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name === "hp") {
      this.setState({ hp: e.target.value });
    } else if (e.target.name === "frontUrl") {
      this.setState({ frontUrl: e.target.value });
    } else if (e.target.name === "backUrl") {
      this.setState({ backUrl: e.target.value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewPokemon(this.state);
    this.setState(emptyState);
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
