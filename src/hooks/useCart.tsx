import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';


interface CartProviderProps {
	children: ReactNode;
}

interface Product {
	id: number;
	title: string;
	price: number;
	priceFormatted: string;
	image: string;
	amount: number;
}

interface Stock {
	id: number;
	amount: number;
}


interface CartContextProps {
	cart: Product[];
	addCart: (product: Omit<Product, "amount">) => void;
	updatedAmountProduct: (productID: number, amount: number) => void;
	removeProduct: (productID: number) => void;
}


export const CartContext = createContext({} as CartContextProps);


export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<Product[]>(() => {
		const cookieCart = localStorage.getItem('@nastore:cart');

		if (cookieCart) {
			return JSON.parse(cookieCart);
		}

		return [];
	});

	async function addCart(product: Omit<Product, "amount">) {
		try {
			const response = await api.get<Stock>(`stock/${product.id}`);
			const stock = response.data;


			const productExists = cart.find(productCart => productCart.id === product.id);
			const productAmount = productExists ? productExists.amount : '0';

			if (productAmount >= stock.amount) {
				toast.error('Quantidade solicitada fora de estoque');
				return;
			}

			if (productExists) {
				const newCart = cart.map(productCart => {
					if (productCart.id === product.id) {
						return {
							...product,
							amount: productCart.amount + 1
						}
					}

					return productCart;
				});

				localStorage.setItem('@nastore:cart', JSON.stringify(newCart));
				setCart(newCart);
			} else {
				localStorage.setItem(
					'@nastore:cart',
					JSON.stringify([...cart, { ...product, amount: 1 }])
				);
				setCart(state => [...state, { ...product, amount: 1 }]);
			}
		} catch {
			toast.error('Erro na adição do produto')
		}
	}

	async function updatedAmountProduct(productID: number, amount: number) {
		try {
			if (amount <= 0) {
				return;
			}

			const response = await api.get<Stock>(`stock/${productID}`);
			const stock = response.data;

			if (stock.amount < amount) {
				toast.error('Quantidade solicitada fora de estoque');
				return
			}

			const updatedCart = cart.map(product => {
				if (productID === product.id) {
					return {
						...product,
						amount
					}
				}

				return product;
			})

			localStorage.setItem("@nastore:cart", JSON.stringify(updatedCart));
			setCart(updatedCart);
		} catch {
			toast.error('Erro na alteração de quantidade do produto');
		}
	}

	function removeProduct(productID: number) {
		try {
			const filteredProduct = cart.filter(product => !(product.id === productID));

			localStorage.setItem("@nastore:cart", JSON.stringify(filteredProduct));
			setCart(filteredProduct)
		} catch {
			toast.error('Erro na remoção do produto');
		}
	}

	return (
		<CartContext.Provider value={{ cart, addCart, updatedAmountProduct, removeProduct }}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const context = useContext(CartContext);

	return context;
}
