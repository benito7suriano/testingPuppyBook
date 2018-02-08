import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      <ul className="list-unstyled">
        {this.state.puppies.map(puppy => (
          <li key={puppy.id}>
            <Link to={"/puppies/" + puppy.id}>{puppy.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default AllPuppies;
