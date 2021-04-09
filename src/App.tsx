import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Header } from './components/Header';

import { CartProvider } from './hooks/useCart';

import { GlobalStyle } from './styles/global';


function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<GlobalStyle />
				<Header />
				<Routes />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
