import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Ul = styled.ul`
	list-style: none;

	& li::before{
		content: "\2022";
		color: blue;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em; 
			}
`

export const InstructionsContainer = styled.div`
	width: 100%;
	background: white;
	display: grid;
	grid-template-columns: 65% 35%;
	position: relative;
	min-width: 480px;

	@media screen and (max-width: 768px){
		grid-template-columns: none;
		grid-template-rows: 1fr 1fr;
		padding-top: 0px;
	}
`

export const ImageWrap = styled.div`
	padding: 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Image = styled.img`
	width: 300px;
	aspect-ratio: 1/1;
`

export const ContentWrap = styled.div`
	color: #010606;
	padding: 150px 40px;
	padding-left: 150px;
	align-items: center;
	position: relative;

	@media screen and (max-width: 768px) {
		padding-right: 100px;
	}
`

export const Heading = styled.h1`
	font-weight: bold;
	text-align: left;
	font-size: 48px;
	color: #4470ad;

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`

export const Content = styled.p`
	text-align: left;
	font-size: 20px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}	
`

export const Highlight = styled(Link)`
	color: #4470ad;
	transition: all 0.1s ease-in-out;

	&:hover{
		background: #4470ad;
		color: white;
		text-decoration: none;
	}
`

export const Line = styled.div`
	background: #4470ad;
	position: absolute;
	width: 3px;
	height: 80%;
	top: 10%;
	right: 35%;

	@media screen and (max-width: 768px) {
		width: 80%;
		height: 3px;
		top: 38.5%;
		right: 10%;
	}
`

export const ButtonWrap = styled.div`
	padding: 10px;
	width: 10rem;
`