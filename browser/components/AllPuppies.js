import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllPuppies extends React.Component {
  constructor() {
    super();
    this.state = {
      puppies: [],
    };
  }

  componentDidMount() {
    axios.get('/api/puppies')
    .then(res => res.data)
    .then(puppies => this.setState({ puppies }))
    .catch(console.error);
  }

  render() {
    return (
      <div className="text-center">
        <h3>Puppies!</h3>
        <ul className="list-unstyled">
          {this.state.puppies.map(puppy => (
            <li key={puppy.id}>
              <Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllPuppies;
