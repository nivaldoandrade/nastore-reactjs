import { lighten } from 'polished';
import styled from 'styled-components';


export const Container = styled.main`
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 0.5rem;
	background-color: var(--white);
	padding: 2rem;
	border-radius: 0.3rem;
`;


export const CartTable = styled.table`
	width: 100%;
	border-spacing: 0 0.5rem;
	text-align: left;

	th {
		padding: 0.75rem;
		color: var(--title);
	}

	td {
		text-align: left;
		padding: 0.75rem;
		color: var(--text);
		border-bottom: 1px solid var(--border);

		&:last-child() {
			border-bottom: none;
		}

		img {
			width: 100px;
			height: 100px;
		}

		strong {
			display: block;
		}

		span {
			font-size: 1.25rem;
			color: var(--black);
			font-weight: 600;
		}

		div {
			display: flex;
			align-items: center;

			button {
				background-color: transparent;

				&:hover {
					svg {
						color: ${lighten(0.3, '#1d2d50')}
					}
				}
			}
		}

		svg {
			color: var(--background-second);
			transition: color 0.2s;
		}

		input[type="text"] {
			width: 40px;
			border-radius: 0.3rem;
			border: 1px solid var(--border);
			margin: 0 1rem;
			padding: 0.5rem 0;
			text-align: center;
		}

		> button {
			background-color: transparent;

			&:hover {
					svg {
						color: var(--red);
					}
			}
		}
	}
`;

export const CartTotal = styled.footer`
	padding-top: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		height: 40px;
		padding: 0 1rem;
		background-color: var(--background-second);
		border-radius: 0.3rem;

		font-weight: 500;
		color: var(--white);

		transition: background-color 0.2s;

		&:hover {
			background-color: var(--background);
		}
	}

	span {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text);

		strong {
			font-size: 1.5rem;
			color: black;
			display: inline-block;
			margin-left: 0.5rem;
		}
	}
`;
