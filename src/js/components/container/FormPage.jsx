import React, { Component } from 'react';
import Input from '../presentational/Input.jsx';

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'OK'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputEvent) {
    this.setState({ [inputEvent.target.id]: inputEvent.target.value });
  }

  render() {
    let { title } = this.state;
    return (<form>
      <Input
        text="Test input"
        label="test-input"
        type="text"
        id="test-input"
        value={title}
        handleChange={this.handleChange}
      />
      {
        Object.keys(this.state).map(key => (<div>{key}</div>))
      }
    </form>);
  }
}

export default FormPage;