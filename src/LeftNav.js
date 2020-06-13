import React from 'react';
import './LeftNav.css';

function LeftNav() {
	return (
		<div className="sidenav col-sm-2">
			<button type="button" class="btn btn-primary btn-lg">Acceuil</button>
			<button type="button" class="btn btn-primary btn-lg">Message</button>
			<button type="button" class="btn btn-primary btn-lg">Notification</button>
			<button type="button" class="btn btn-primary btn-lg">À propos</button>
		</div>
	);
}

export default LeftNav;