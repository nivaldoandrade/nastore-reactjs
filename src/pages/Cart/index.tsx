import { FaTrash } from 'react-icons/fa';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/useCart';

import { priceFormatted } from '../../utils/format';

import { Container, CartTable, CartTotal } from './styles';

interface SubTotalProduct {
	[key: number]: string;
}

export function Cart() {
	const { cart, updatedAmountProduct, removeProduct } = useCart();

	const subTotalProduct = cart.reduce((sumSubtotal, product) => {
		return {
			...sumSubtotal,
			[product.id]: priceFormatted.format(product.amount * product.price)
		}
	}, {} as SubTotalProduct)

	const total = priceFormatted.format(cart.reduce((sumTotal, product) => {
		return sumTotal + (product.amount * product.price);
	}, 0));

	function handleUpdatedAmountProduct(id: number, amount: number) {
		updatedAmountProduct(id, amount);
	}

	function handleCheckout() {
		toast.success("Pedido realizado!!")
	}

	return (
		<Container>
			<CartTable>
				<thead>
					<tr>
						<th></th>
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.map(product => (
						<tr key={product.id}>
							<td>
								<img src={product.image} alt={product.title} />
							</td>
							<td>
								<strong>{product.title}</strong>
								<span>{product.priceFormatted}</span>
							</td>
							<td>
								<div>
									<button
										type="button"
										disabled={product.amount <= 1}
										onClick={
											() => handleUpdatedAmountProduct(product.id, product.amount - 1)
										}
									>
										<FiMinusCircle size={16} />
									</button>
									<input type="text" readOnly value={product.amount} />
									<button
										type="button"
										onClick={
											() => handleUpdatedAmountProduct(product.id, product.amount + 1)
										}
									>
										<FiPlusCircle size={16} />
									</button>
								</div>
							</td>
							<td>
								<strong>{subTotalProduct[product.id]}</strong>
							</td>
							<td>
								<button
									type="button"
									onClick={() => removeProduct(product.id)}
								>
									<FaTrash size={16} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</CartTable>
			<CartTotal>
				<button
					type="button"
					onClick={handleCheckout}
				>
					FINALIZAR PEDIDO
				</button>
				<span>TOTAL<strong>{total}</strong></span>
			</CartTotal>
		</Container>
	)
}
