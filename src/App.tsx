import './App.css';
import Nav from './components/Nav';
import BasicGrid from './components/Grid';
import { ApiProvider } from './context/ApiContext';

function App() {
	return (
		<ApiProvider>
			<Nav />
			<BasicGrid />
		</ApiProvider>
	);
}

export default App;
