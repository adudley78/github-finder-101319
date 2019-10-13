import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo'
  };

  render() {
    const { login } = this.state;

    return (
      <div className='card text-center'>
        <h3>{login}</h3>

        <div>
          <a href='' className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
