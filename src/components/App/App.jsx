// Import Material UI Components
import { CssBaseline } from '@material-ui/core';

import './styles/App.Styles.css';

// Import App Components
import Header from '../Header/index'

function App() {
	return (
		<div className="app">
			<CssBaseline />
			<Header />
			<h1>React App - Smarty Mobile</h1>
		</div>
	);
}

export default App;
