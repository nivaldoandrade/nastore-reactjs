import styled from 'styled-components';

export const Container = styled.main`
	max-width: 1120px;
	margin: 0 auto;
	padding: 1rem 0.5rem;
`;

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	li {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		background-color: var(--white);
		border-radius: 0.3rem;

		strong {
			color: var(--text);
		}

		> span {
			font-size: 1.25rem;
			color: var(--black);
			font-weight: 600;
			margin-bottom: 2rem;
		}

		button {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;
			border: 0;
			border-radius: 0.5rem;
			background-color: var(--background);
			transition: background-color 0.2s;

			&:hover {
				background-color: var(--background-second);
			}

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;
				padding: 0.75rem;
				background-color: var(--background-second);
				border-top-left-radius: 0.5rem;
				border-bottom-left-radius: 0.5rem;

				color: var(--white);
			}

			span {
				font-weight: 500;
				color: var(--white);
				padding: 0 0.5rem;
				flex: 1;
			}
		}

	}

`;
