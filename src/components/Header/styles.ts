import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 2rem 0.5rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

`;

export const Cart = styled(Link)`
	text-decoration: none;
	color: var(--title);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	div {
		strong {
			font-size: 0.75rem;
		}

		p {
			font-size: 0.75rem;
			text-align: right;
		}
	}
`;

