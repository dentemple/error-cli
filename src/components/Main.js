import React, { Component } from 'react';


export default class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log(event, data);
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/add', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="password">Enter your password</label>
        <input id="password" name="password" type="password" />

        <button>Send data!</button>
      </form>
    );
  }
}