import styled from 'styled-components';
import {Link} from 'react-scroll';

export const AboutContainer = styled.div`
	width: 100%;
	background: white;
	display: grid;
	grid-template-columns: 35% 65%;
	position: relative;
	min-width: 480px;
`

export const MainContainer = styled.div`
	overflow-x: hidden;
	
`

export const PurposeContainer = styled.div`
	width: 100%;
	background: white;
	display: grid;
	grid-template-columns: 65% 35%;
	position: relative;
	min-width: 480px;
	// background: red;
	margin-bottom: -100px;
`

export const FutureContainer = styled.div`
	width: 100%;
	background: white;
	display: grid;
	grid-template-columns: 65% 35%;
	position: relative;
	min-width: 480px;
	// background: red;
	// margin-bottom: -200px;
`

export const ImageWrap = styled.div`
	padding: 0 0;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 160px;
`

export const ImageWrap2 = styled.div`
	padding: 0 0;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Image = styled.img`
	width: 500px;
	aspect-ratio: 1/1;

	@media screen and (max-width: 768px){
		width: 300px;
	}
`
export const Image2 = styled.img`
	width: 500px;
	aspect-ratio: 1/1;

	@media screen and (max-width: 768px){
		width: 300px;
	}
`

export const ContentWrap = styled.div`
	color: white;
	background: #1a1a1a;
	padding: 50px 100px 40px;
	padding-bottom: 80px;
	padding-right: 125px;
	align-items: center;
	position: relative;

	@media screen and (max-width: 768px) {
		padding-right: 10px;
		border-bottom: solid #4470ad 5px;
		border-top: solid #4470ad 5px;
	}
`

export const ContentWrapP = styled.div`
	color: white;
	background: #1a1a1a;
	padding: 50px 100px 40px;
	padding-bottom: 80px;
	padding-left: 125px;
	align-items: center;
	position: relative;
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

export const Bold = styled.p`
	text-align: left;
	font-size: 20px;
	font-weight: bold;

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
	width: 10px;
	height: 100%;
	top: 0%;
	left: 35%;
	z-index: 1;

	@media screen and (max-width: 768px) {
		margin-right: 20px;
		display: none;
	}
`

export const LineP = styled.div`
	background: #4470ad;
	position: absolute;
	width: 10px;
	height: 77.1%;
	top: 0%;
	right: 35%;
	z-index: 1;


	@media screen and (max-width: 768px) {
		margin-left: 20px;
		display: none;
	}
`

export const LineF = styled.div`
	background: #4470ad;
	position: absolute;
	width: 10px;
	height: 100%;
	top: 0%;
	right: 35%;
	z-index: 1;


	@media screen and (max-width: 768px) {
		margin-left: 20px;
		display: none;
	}
`

export const ButtonWrap = styled.div`
	padding: 10px;
	width: 10rem;
`