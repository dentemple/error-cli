import React, { Component } from 'react';
import SignUp from './SignUp';
import MainPage from './Main.js';
import '../../public/stylesheet/signup.css';


export default class App extends Component {
	render() {
		return (
			<div>

				<h1 className='heading'>Get Drunk On Errors!</h1>
				<img/>
				{/* <TestForm/> */}
				<MainPage/>
			</div>
		)
	}
} 