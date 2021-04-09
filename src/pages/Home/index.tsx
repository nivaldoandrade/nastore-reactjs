import { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from '../../hooks/useCart';

import { priceFormatted } from '../../utils/format';

import { api } from '../../services/api';

import { Container, ProductList } from './styles';

interface ProductFormatted {
	id: number;
	title: string;
	price: number;
	priceFormatted: string;
	image: string;
}

interface CartItemsAmount {
	[key: number]: number;
}

export function Home() {
	const [products, setProducts] = useState<ProductFormatted[]>([]);

	const { addCart, cart } = useCart();


	useEffect(() => {
		async function GetAllProducts() {
			const response = await api.get('products');
			const products = response.data;

			const productsFormatted = products.map((product: ProductFormatted) => ({
				...product,
				priceFormatted: priceFormatted.format(product.price)
			}));

			setProducts(productsFormatted);
		}

		GetAllProducts();
	}, [])

	const cartItemsAmount = cart.reduce((sumAmount, product) => {
		return {
			...sumAmount,
			[product.id]: product.mount
		}
	}, {} as CartItemsAmount);

	return (
		<Container>
			<ProductList>
				{products.map(product => (
					<li key={product.id}>
						<img src={product.image} alt={product.title} />
						<strong>{product.title}</strong>
						<span>{product.priceFormatted}</span>

						<button
							onClick={() => addCart(product)}
						>
							<div>
								<FiShoppingCart size={24} />
								{cartItemsAmount[product.id]}
							</div>
							<span>ADICIONAR AO CARRINHO</span>
						</button>
					</li>
				))}
			</ProductList>
		</Container>
	)
}
