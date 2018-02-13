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

  async componentDidMount () {
    try {
      const res = await axios.get('/api/puppies');
      this.setState({ puppies: res.data });
    } catch (err) {
      console.error(err);
    }
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
