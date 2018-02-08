import React from 'react';
import axios from 'axios';

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
      <div>
        <h2>{ this.state.puppy.name }</h2>
        <img src={this.state.puppy.image} />
      </div>
    );
  }
}

export default SinglePuppy;
