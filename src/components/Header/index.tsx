import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from '../../hooks/useCart';

import logoImg from '../../assets/logo.svg';

import { Container, Cart } from './styles';

export function Header() {
	const { cart } = useCart();

	const totalCart = cart.length;

	return (
		<Container>
			<Link to='/'>
				<img src={logoImg} alt="nastore" />
			</Link>
			<Cart to="/cart">
				<div>
					<strong>Meu carrinho</strong>
					<p>{totalCart === 1 ? `${totalCart} item` : `${totalCart} itens`}</p>
				</div>
				<FiShoppingCart size={30} />
			</Cart>
		</Container>
	)
}
