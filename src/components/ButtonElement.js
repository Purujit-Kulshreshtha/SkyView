import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
	background: ${({primary}) => (primary ? '#4470ad' : '#010606')};
	white-space: nowrap;
	padding: ${({big}) => (big ? "14px 48px" : '12px 30px')};
	color:  ${({dark}) => (dark ? '#010606' : '#fff')};
	font-size: ${({fontBig}) => (fontBig ? '20px' : "16px")};
	outline: none;
	border: none;
	cursour: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
	transition: all 0.2s ease-in-out;

	&:hover{
		transition: all 0.2s ease-in-out;	
		background: ${({primary}) => (primary ? '#fff' : '#010606')};
		color:  ${({dark}) => (dark ? '#010606' : '#fff')};
		text-decoration: none;
		}
`


export const ButtonNormal = styled.button`
	background: ${({primary}) => (primary ? '#4470ad' : '#010606')};
	white-space: nowrap;
	padding: ${({big}) => (big ? "14px 48px" : '12px 30px')};
	color:  ${({dark}) => (dark ? '#010606' : '#fff')};
	font-size: ${({fontBig}) => (fontBig ? '20px' : "16px")};
	outline: none;
	border: none;
	cursour: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
	transition: all 0.2s ease-in-out;

	&:hover{
		transition: all 0.2s ease-in-out;	
		background: ${({primary}) => (primary ? '#fff' : '#010606')};
		color:  ${({dark}) => (dark ? '#010606' : '#fff')};
		text-decoration: none;
		}
`