import React, { Component } from 'react';
import SignUp from './SignUp';
import MainPage from './Main.js';
import '../../public/stylesheet/signup.css';
import logoImg from '../../build/b43cca3a3c7a6ccde030d3b3c7130f38.jpg'


export default class App extends Component {
	render() {
		const logo = require('../../build/b43cca3a3c7a6ccde030d3b3c7130f38.jpg');
		return (
			<div>

				<h1 className='heading'>Get Drunk On Errors!</h1>
				<img src={logo}/>
				{/* <TestForm/> */}
				<MainPage/>
			</div>
		)
	}
} 