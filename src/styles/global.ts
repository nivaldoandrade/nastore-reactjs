import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #133b5c;
		--background-second: #1d2d50;
		--title: #fcdab7;
		--white: #fff;
		--text: #333;
		--black: #000;
		--red: #ff3232;
		--border: #ddd;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%
		}
	}

	body {
		background: var(--background) url(${backgroundImg}) no-repeat center top;
		-webkit-font-smoothing: antialiased;
	}

	body, textarea, input, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
	}

	button {
		cursor: pointer;
		border: 0;

		[disabled] {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}
`;
