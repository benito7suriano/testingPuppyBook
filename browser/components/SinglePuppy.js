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

  async componentDidMount () {
    const id = this.props.match.params.puppyId;
    try {
      const res = await axios.get(`/api/puppies/${id}`);
      this.setState({ puppy: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  render () {
    const { puppy } = this.state;
    return (
      <div className="text-center">
        <img src={puppy.image} />
        <div>
          <h2>{puppy.name} (Age: {puppy.age})</h2>
          <Link to="/puppies"><button>Back to Home</button></Link>
        </div>
      </div>
    );
  }
}

export default SinglePuppy;
