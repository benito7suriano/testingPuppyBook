import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddPuppyForm from './AddPuppyForm';

class AllPuppies extends React.Component {
  constructor() {
    super();
    this.state = { puppies: [] };
    this.addPuppy = this.addPuppy.bind(this);
  }

  componentDidMount() {
    axios.get('/api/puppies')
      .then(res => res.data)
      .then(puppies => this.setState({ puppies }))
      .catch(console.error);
  }

  addPuppy(newPuppy) {
    this.setState(prevState => ({
      puppies: [...prevState.puppies, newPuppy],
    }));
  }

  render() {
    return (
      <div className="text-center">
        <div>
          <h3>Puppies!</h3>
          <ul className="list-unstyled">
            {this.state.puppies.map(puppy => (
              <li key={puppy.id}>
                <Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <AddPuppyForm addPuppy={this.addPuppy} />
      </div>
    );
  }
}

export default AllPuppies;
