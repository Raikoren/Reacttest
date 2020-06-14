import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import './MainApp.css';

const identity = {
	first: "yannis",
	last: "labidi",
	genre: "monsieur"
}

function MainApp(props) {

	const step = 0;
	
	if (step == 0) {
		return (<FirstStep />);
	}
	if (step == 1) {
		return (<SecondStep />);
	}
	if (step == 2) {
		return (<ThirdStep first={identity.first} last={identity.last} genre={identity.genre}/>);
	}
}	

export default MainApp;
