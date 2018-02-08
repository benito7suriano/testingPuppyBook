import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SinglePuppy extends React.Component {
  constructor() {
    super();
    this.state = {
      puppy: {},
    };
  }

  componentDidMount () {
    const id = this.props.match.params.puppyId;
    axios.get(`/api/puppies/${id}`)
    .then(res => res.data)
    .then(puppy => this.setState({ puppy }))
    .catch(console.error);
  }

  render () {
    return (
      <div className="text-center">
        <img src={this.state.puppy.image} />
        <h2>{ this.state.puppy.name }</h2>
        <button><Link to="/puppies">Back to Home</Link></button>
      </div>
    );
  }
}

export default SinglePuppy;
