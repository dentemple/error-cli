import React, { Component } from 'react';
import FormLabel from './FormLabel';

export default class TestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let formData = {
      formSender: this.state.name,
      formSecret: this.state.password
    }

    if (formData.formSender.length < 1 || formData.formSecret.length < 1) {
      return false
    }
    console.log({formData});
    // $.ajax({
    //  url: '/api/add',
    //  dataType: 'json',
    //  type: 'POST',
    //  data: formData,
    //  success: function(data) {
    //    console.log('success case:', {data});
    //   if (confirm('Thank you for your data!')) {
    //     this.setState({
    //      name: '',
    //      password: ''
    //     })
    //   }
    //  },
    //  error: function(xhr, status, err) {
    //   console.error(status, err.toString())
    //   alert('There was some problem with sending your data.')
    //  }
    // })
    const url = '/api/add'
    fetch(url)
    .then( res => {
      return res.json()
    })
    .then( json => {
      console.log({json});
      this.setState({
        name: '',
        password: ''
      })
    })
    .catch(err => console.log({err}));

  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        <fieldset className='form-group'>
          <FormLabel htmlFor='formName' title='Full Name:' />
          <input
            id='formName'
            className='form-input'
            name='name'
            type='text'
            required onChange={this.handleChange}
            value={this.state.name}
          />
        </fieldset>

        <fieldset className='form-group'>
          <FormLabel htmlFor='formPass' title='Password:' />
          <input
            id='formName'
            className='form-input'
            name='password'
            type='password'
            required onChange={this.handleChange}
            value={this.state.password}
          />
        </fieldset>

        <div className='form-group'>
          <input id='formButton' type='submit'/>
        </div>

      </form>
      // <button onClick={this.clickedBtn}>Our First Test</button>
    )
  }
}
