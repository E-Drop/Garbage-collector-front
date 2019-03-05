import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import donationService from '../lib/donation-service';
import {Redirect} from 'react-router-dom'
class Donate extends Component {

  state = {
    tinsnumber: 0,
    bottlesnumber: 0,
  };
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, location } = this.props.user
    const { tinsnumber, bottlesnumber } = this.state;
    console.log('llamada')
    donationService.donate({ username, tinsnumber, bottlesnumber, location })
      .then( (data) => {
          console.log(data)
        this.setState({
            tinsnumber: 0,
            bottlesnumber: 0,
        });
      })
      .catch( error => console.log(error) )
  }

  handleChangeClick = (type, action) => {
    if(action === '+'){
      var result = this.state[type]+1;
      this.setState({[type]: result});
    }
    else if(this.state[type] > 0) {
      var result = this.state[type]-1;
      this.setState({[type]: result});
    }
    
  }

  checkIfHome = () => {
    const { tinsnumber, bottlesnumber } = this.state;
    const plus = '../../img/plus.svg';
    const minus = '../../img/minus.svg';
    const tin = '../../img/can.svg';
    const bottle = '../../img/bottles.svg';
    if(this.props.homelocation!= ""){
      return (
      <div>
      {this.state.message && <div>{this.state.message}</div>}
        <form className="donation-form-wrapper" onSubmit={this.handleFormSubmit}>
          <div className="donation-container">
            <div className="donation-box">
              <p className="donation-type-image" style={{backgroundImage:`url(${tin})`}}></p>
              <div className="buttons-control">
              <div onClick={()=>this.handleChangeClick("tinsnumber","-")} className="button-delete" style={{backgroundImage:`url(${minus})`}}></div>
              <p>{tinsnumber}</p>
              <div onClick={()=>this.handleChangeClick("tinsnumber","+")} className="button-add" style={{backgroundImage:`url(${plus})`}}></div>
              </div>
            </div>
            <div className="donation-box">
              <p className="donation-type-image" style={{backgroundImage:`url(${bottle})`}}></p>
              <div className="buttons-control">
                <div onClick={()=>this.handleChangeClick("bottlesnumber","-")} className="button-delete" style={{backgroundImage:`url(${minus})`}}></div>
                <p>{bottlesnumber}</p>
                <div onClick={()=>this.handleChangeClick("bottlesnumber","+")} className="button-add" style={{backgroundImage:`url(${plus})`}}></div>
              </div>
            </div>
          </div>
          
          
          <input type="submit" value="Donate" />
        </form>
      </div>
      )
    } else {
      return <Redirect to='/map'/>
    }
  }

  render() {
    
      return ( this.checkIfHome())
  }
}

export default withAuth(Donate);