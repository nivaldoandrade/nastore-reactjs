import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { CartProvider } from './hooks/useCart';

import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';


function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<GlobalStyle />
				<Header />
				<Routes />
				<ToastContainer />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
