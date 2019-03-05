import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom'
class Private extends Component {
  render() {
    const { user } = this.props
    return (  
      <div>
        <h1>Welcome {user.username}</h1>
        <h3>What you gonna do?</h3>
        <Link to='/donate'><button>Donate</button></Link>
        <Link to='/collections'><button>Collect</button></Link>
      </div>
    )
  }
}
 export default withAuth(Private)