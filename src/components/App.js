import React, { Component } from 'react';
import TestForm from './TestForm';
import MainPage from './Main.js';
import '../../public/stylesheet/signup.css';


export default class App extends Component {
	render() {
		return (
			<div>
				<h1 className='heading'>Get Drunk On Errors!</h1>
				{/* <TestForm/> */}
				<MainPage/>
			</div>
		)
	}
} 