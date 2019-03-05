import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider'
import collectionService from '../lib/collection-service'
class CollectionsItem extends Component {

  handleClick = () => {
    const {data , user } = this.props;
    const name = user.username;
    this.props.reservar(data._id);
    collectionService.reserve({ data, name })
    .then( (data) => {
    })
    .catch( error => console.log(error) )
  }

  render() {
    const tin = '../../img/can.svg';
    const bottle = '../../img/bottles.svg';
    const { username, tinsnumber, bottlesnumber, location } = this.props.data;
    return (
            <div className="collection-item">
                <p>{username} - {location}</p>
                <div className="garbage-collection-container">
                  {tinsnumber > 0 && <div><p className="donation-type-image-tin" style={{backgroundImage:`url(${tin})`}}></p><p>{tinsnumber}</p></div>}
                  {bottlesnumber > 0 && <div><p className="donation-type-image-bottle" style={{backgroundImage:`url(${bottle})`}}></p><p>{bottlesnumber}</p></div>}
                </div>
                <button onClick={this.handleClick} >Reservar</button>
            </div>
    )
  }
}

export default withAuth(CollectionsItem);