import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import './MainApp.css';

function MainApp() {

	const step = 2;
	
	if (step == 0) {
		return (<FirstStep />);
	}
	if (step == 1) {
		return (<SecondStep />);
	}
	if (step == 2) {
		return (<ThirdStep first="Yannis" last="LABIDI" genre="Monsieur"/>);
	}
}	

export default MainApp;
