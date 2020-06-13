import React, { useState } from 'react';
import './MainApp.css';

function FirstStep() {
	
	const [First, Last] = useState(0);
	const step = 0;
	const genre = useState(0);
  
	return (
	<div className="col-9 col-lg-10 pt-3 px-4 text-center">
		<div class="input-group mb-3">
		<div class="input-group-prepend">
			<span class="input-group-text">First Name</span>
		</div>
		<input
			type="text"
			class="form-control"
			required />
	</div>
	<div class="input-group mb-3">
		<div class="input-group-prepend">
			<span class="input-group-text">Last Name</span>
		</div>
		<input
		type="text"
		class="form-control"
		required />
	</div>
	<button type="button" class="btn btn-primary">
		Voici l'identité du suspect</button>
	</div>
	);
}	

export default FirstStep;
