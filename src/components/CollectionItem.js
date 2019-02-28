import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider'
import collectionService from '../lib/collection-service'
import {Image} from 'cloudinary-react'
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
    const { username, name, number, location } = this.props.data;
    return (
            <div>
            <Image cloudName="demo" publicId="sample" width="300" crop="scale"/>
            
                <p>{username} - {location}</p>
                <p>{name} - {number}</p>
                <button onClick={this.handleClick} >Reservar</button>
            </div>
    )
  }
}

export default withAuth(CollectionsItem);