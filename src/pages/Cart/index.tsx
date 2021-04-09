import { FaTrash } from 'react-icons/fa';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import { Container, CartTable, CartTotal } from './styles';

export function Cart() {
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
					<tr>
						<td>
							<img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="" />
						</td>
						<td>
							<strong>Tênis de Caminhada Leve Confortável</strong>
							<span>R$ 179,90</span>
						</td>
						<td>
							<div>
								<button type="button">
									<FiMinusCircle size={16} />
								</button>
								<input type="text" readOnly value="10" />
								<button type="button">
									<FiPlusCircle size={16} />
								</button>
							</div>
						</td>
						<td>
							<strong>R$ 179,90</strong>
						</td>
						<td>
							<button>
								<FaTrash size={16} />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="" />
						</td>
						<td>
							<strong>Tênis de Caminhada Leve Confortável</strong>
							<span>R$ 179,90</span>
						</td>
						<td>
							<div>
								<button type="button">
									<FiMinusCircle size={16} />
								</button>
								<input type="text" readOnly value="10" />
								<button type="button">
									<FiPlusCircle size={16} />
								</button>
							</div>
						</td>
						<td>
							<strong>R$ 179,90</strong>
						</td>
						<td>
							<button>
								<FaTrash size={16} />
							</button>
						</td>
					</tr>
				</tbody>
			</CartTable>
			<CartTotal>
				<button type="button">FINALIZAR PEDIDO</button>
				<span>TOTAL<strong>R$ 499,70</strong></span>
			</CartTotal>
		</Container>
	)
}
