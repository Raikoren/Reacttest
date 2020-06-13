import React from 'react';
import './LeftNav.css';

function LeftNav() {
	return (
	  <div className="sidenav col-3 col-lg-2 bg-dark sidebar">
		<div className="sidebar-sticky">
		  <ul className="nav flex-column">
			<li class="nav-item mb-3"><a href="#" className="nav-link text-white">Acceuil</a></li>
			<li class="nav-item mb-3"><a href="#" className="nav-link text-white">Message</a></li>
			<li class="nav-item mb-3"><a href="#" className="nav-link text-white">Notification</a></li>
			<li class="nav-item mb-3"><a href="#" className="nav-link text-white">À propos</a></li>
		  </ul>
		</div>
	  </div>
	);
  }

export default LeftNav;