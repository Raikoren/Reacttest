import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import './MainApp.css';

function MainApp() {
	const step = 0;
	const [First, Last] = useState(0);
	const genre = useState(0);
	
	if (step == 0) {
		return (<FirstStep />);
	}
	if (step == 1) {
		return (<SecondStep />);
	}
	if (step == 2) {
		return (<ThirdStep />);
	}
}	

export default MainApp;
