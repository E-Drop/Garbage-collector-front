import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider'
import collectionService from '../lib/collection-service'
import CollectionItem from '../components/CollectionItem'
class Collections extends Component {

  state = {
    collections: [],
  };

  deleteFromState = (id) => {
    const filtrado = this.state.collections.filter((item) => item._id !== id)  
    this.setState({
        collections: filtrado,
      })
  }

  componentDidMount = () => {
    collectionService.collect()
      .then( (data) => {
        this.setState({
            collections: data
        });
      })
      .catch( error => console.log(error) )
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
      {(collections && collections.map((data,key)=>
        <CollectionItem key={key} reservar={this.deleteFromState} data={data} />))}
      </div>
    )
  }
}

export default withAuth(Collections);