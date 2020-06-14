import React, { useState } from 'react';
import './MainApp.css';

function SecondStep(props) {
	
	return (
		<div className="col-9 col-lg-10 pt-3 px-4 text-center">
			<div className="row">
				<div className="input-group mb-3 col justify-content-center mt-5">
					<button 
					type="button" 
					className="btn btn-primary">
					Homme</button>
				</div>
				<div className="input-group mb-3 col justify-content-center mt-5">
					<button 
					type="button" 
					className="btn btn-primary">
					Femme</button>
				</div>
			</div>
		</div>
	);
}

export default SecondStep;
