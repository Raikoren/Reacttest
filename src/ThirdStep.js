import React, { useState } from 'react';
import './MainApp.css';

function formatName(identity, genre) {
	return genre.id + ' ' + identity.first + ' ' + identity.last;
  }

const identity = {
	first: 'yannis',
	last: 'labidi'
};

const genre = {id: 'Monsieur'};

const elem = (
	<h1>
		Bonjour, {formatName(identity, genre)} !
	</h1>
);

function ThirdStep(elem) {
return ({elem});
}

export default ThirdStep;
