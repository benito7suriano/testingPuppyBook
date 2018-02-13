import React from 'react';
import axios from 'axios';

class AddPuppyForm extends React.Component {
  postPuppy(event) {
    event.preventDefault();
    const name = event.target.name.value;
    event.target.name.value = '';
    axios.post('/api/puppies', { name })
      .then(res => this.props.addPuppy(res.data))
      .catch(console.error);
  }

  render() {
    return (
      <form onSubmit={this.postPuppy.bind(this)}>
        <p>Add a new puppy</p>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Puppy name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddPuppyForm;
