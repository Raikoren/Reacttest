import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<React.StrictMode>
		<TopNav />
		<div className="container-fluid">
			<div className="row">
				<LeftNav />
				<MainApp />
			</div>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
