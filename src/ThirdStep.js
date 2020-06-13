import React, { useState } from 'react';
import './MainApp.css';

function ThirdStep() {
	
	return (
	<div className="App container">
		<div className="main-app form-group">
			<div class="input-group input-group-lg mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-lg">First Name</span>
				</div>
			<input
			type="text"
			class="form-control"
			aria-label="Large"
			aria-describedby="inputGroup-sizing-sm"
			required/>
			</div>
			<div class="input-group input-group-lg mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-lg">Last Name</span>
				</div>
			<input
			type="text"
			class="form-control"
			aria-label="Large"
			aria-describedby="inputGroup-sizing-sm"
			required/>
			</div>
			<button type="button" class="btn btn-primary">
			Voici l'identité du suspect</button>
		</div>
	</div>
	);
}

export default ThirdStep;
