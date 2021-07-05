import styled from 'styled-components';

export const PathfinderContainer = styled.div`
	width: 100%;
	// min-height: 500px;
	display: grid;
	grid-template-columns: 50% 50%;
	position: relative;

	@media screen and (max-width: 768px){
		// grid-template-rows: 1fr 1fr;
		// grid-template-columns: none;
		// min-height: 800px;
		display: flex;
		flex-direction: column;

	}
`

export const Divider = styled.div`
	background: #4470ad;
	position: absolute;
	width: 3px;
	height: 90%;
	top: 5%;
	left: 50%;


	@media screen and (max-width: 768px) {
		height: 3px;
		width: 90%;
		top: 7%;
		left: 5%;
		display: none;
	}
`

export const SearchWrap = styled.div`
	// background: red;
	color: white;
	margin: 16px 16px;
	min-height: 400px;
	padding: 0;
	position: relative;
	display: flex;
	justify-content: center;
	// align-items: center;	

	@media screen and (max-width: 768px) {
		min-height: 250px;
		max-height: 250px;
	}
`

export const BarsWrap = styled.div`
	position: absolute;
	top: 220px;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;

	@media screen and (max-width: 768px){
		transform: translate(-50%, -100%);
	}
`

export const SearchBarWrap = styled.div`
	margin: 20px;
`

export const ButtonWrap = styled.div`
	
	position: absolute;
	top: 180px;
	left: 50%;
	transform: translate(-50%, 250%);
	display: flex;


	@media screen and (max-width: 768px){
		transform: translate(-50%,100%);
	}
`

export const RouteWrap = styled.div`

`

export const Heading = styled.h1`
	font-weight: bold;
	text-align: left;
	font-size: 48px;
	color: #4470ad;
	position: absolute;
	transform: translate(-2%, 100%);

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`

export const Heading2 = styled.h1`
	font-weight: bold;
	text-align: center;
	font-size: 48px;
	color: #4470ad;
	position: absolute;
	transform: translate(-2%, 100%);

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`

export const Heading3 = styled.h1`
	font-weight: bold;
	text-align: center;
	font-size: 48px;
	color: #4470ad;
	position: absolute;
	transform: translate(0%, 35%);

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`

export const PlaceholderWrapper = styled.div`
	margin: 50px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 13%;
	color: #4470ad;

	@media screen and (max-width: 768px){
		display: none;
	}
	
`

