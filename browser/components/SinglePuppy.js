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
    const { puppy } = this.state;
    return (
      <div className="text-center">
        <img src={puppy.image} />
        <h2>{puppy.name} ({puppy.age})</h2>
        <Link to="/puppies"><button>Back to Home</button></Link>
      </div>
    );
  }
}

export default SinglePuppy;
