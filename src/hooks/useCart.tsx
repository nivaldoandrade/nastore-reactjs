import { createContext, ReactNode, useContext, useState } from 'react';


interface CartProviderProps {
	children: ReactNode;
}

interface Product {
	id: number;
	title: string;
	price: number;
	priceFormatted: string;
	image: string;
	mount: number;
}


interface CartContextProps {
	cart: Product[];
	addCart: (product: Omit<Product, "mount">) => void;
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

	function addCart(product: Omit<Product, "mount">) {
		const productExists = cart.find(productCart => productCart.id === product.id);

		if (productExists) {
			const newCart = cart.map(productCart => {
				if (productCart.id === product.id) {
					return {
						...product,
						mount: productCart.mount + 1
					}
				}

				return productCart;
			});

			localStorage.setItem('@nastore:cart', JSON.stringify(newCart));
			setCart(newCart);
		} else {
			localStorage.setItem(
				'@nastore:cart',
				JSON.stringify([...cart, { ...product, mount: 1 }])
			);
			setCart(state => [...state, { ...product, mount: 1 }]);
		}
	}

	return (
		<CartContext.Provider value={{ addCart, cart }}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const context = useContext(CartContext);

	return context;
}
