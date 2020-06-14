import React, { useState } from 'react';
import './MainApp.css';

{/*function SetName(props) {
	props.first = 
}*/}

function FirstStep(props) {
	
	{/*var last = "a";
	var first = "a";*/}

	return (
	<div className="col-9 col-lg-10 pt-3 px-4 text-center">
		<div class="input-group mb-3">
		<div class="input-group-prepend">
			<span class="input-group-text">First Name</span>
		</div>
		<input
			type="text"
			name="first"
			class="form-control"
			required
			/>
		</div>
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Last Name</span>
			</div>
			<input
			type="text"
			name="last"
			class="form-control"
			required />
			{/*onCompositionUpdate=""*/}
		</div>
		<button
		type="button"
		class="btn btn-primary"
		>{/*onClick={SetName(props)}*/}
			Voici l'identité du suspect
		</button>
	</div>
	);
}	

export default FirstStep;
