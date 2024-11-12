import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props)
    //state
    this.state = {
      users: [],
      loading: false
    };
    // bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=5').then(response =>
      this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    const {loading, users} = this.state
    return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
              <input type="submit" value="load users" />
       </form>
      {!loading
       ? users.map(user => (
          <div key={user.id.value}>
            <h2 style={{color: 'blue'}}>{user.name.last}</h2>
            <p>{user.email}</p>
            <hr/>
          </div>
        ))
      : <Loading message="Hey, can you wait a bit :)" />}
    </div>
    );
  }
}

export default App;
