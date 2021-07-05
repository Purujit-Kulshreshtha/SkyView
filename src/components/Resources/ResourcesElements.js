import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ResourcesContainer = styled.div`
	width: 100%;
	background: #010606;
	display: grid;
	grid-template-columns: 35% 65%;
	position: relative;
	min-width: 480px;
	overflow-x: hidden;
`

export const Highlight = styled(Link)`
	color: #010606;
	transition: all 0.1s ease-in-out;

	&:hover{
		background: black;
		color: #4470ad;
		text-decoration: none;
	}
`

export const HighlightA = styled.a`
	color: white;
	transition: all 0.1s ease-in-out;

	&:hover{
		background: white;
		color: #4470ad;
		text-decoration: none;
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
	padding-right: 150px;
	align-items: center;
	position: relative;

	@media screen and (max-width: 768px) {
		padding-left: 100px;
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

export const Line = styled.div`
	background: #4470ad;
	position: absolute;
	width: 3px;
	height: 80%;
	top: 10%;
	left: 35%;

	@media screen and (max-width: 768px) {
		margin-left: 20px;
	}
`

export const ButtonWrap = styled.div`
	padding: 10px;
	width: 10rem;
`