import { css } from 'frontity';
import * as Variables from './Variables';

const Reset = css`
* {
	margin: 0;
	padding: 0;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
	font-size: 62.5%; // sets 1rem = 10px (10/16 = 62.5%)
}

body {
	font-family: neusa-next-std, sans-serif;
	font-weight: 400;
	font-style: normal;
	line-height: 1.6;
	color: ${Variables.colorBlack};
	background-color: ${Variables.colorWhite};
	background-size: cover;
}
` 


export default Reset;