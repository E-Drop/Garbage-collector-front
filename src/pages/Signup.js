import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    location: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, location } = this.state;

    this.props.signup({ username, password, location })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
            location: "",
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, location } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={this.handleChange} />
          
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);