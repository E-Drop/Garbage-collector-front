import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import donationService from '../lib/donation-service';
class Donate extends Component {

  state = {
    name: "",
    number: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, location } = this.props.user
    const { name, number } = this.state;

    donationService.donate({ username, name, number, location })
      .then( (data) => {
          console.log(data)
        this.setState({
            name: "",
            number: "",
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { name, number } = this.state;
    return (
      <div>
      {this.state.message && <div>{this.state.message}</div>}
        <form onSubmit={this.handleFormSubmit}>
          <label>Type of Garbage:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
          <label>Number:</label>
          <input type="number" name="number" value={number} onChange={this.handleChange} />
          
          <input type="submit" value="Donate" />
        </form>
      </div>
    )
  }
}

export default withAuth(Donate);