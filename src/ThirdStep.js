import React, { useState } from 'react';
import './MainApp.css';



function ThirdStep(props) {
	return (
			<h1>
				<span class="badge badge-secondary">
					Bonjour, {props.genre + ' ' + props.first + ' ' + props.last}
				</span>
			</h1>
		);
}

export default ThirdStep;
