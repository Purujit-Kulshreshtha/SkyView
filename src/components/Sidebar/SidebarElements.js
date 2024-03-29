import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
// import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({isOpen}) => (isOpen ? "100%" : "50%")};
	top: ${({isOpen}) => (isOpen ? "0" : "-100%")}
`

export const CloseIcon = styled(FaTimes)`
	color: white;
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursour: pointer;
	outline: none;
`

export const SidebarWrapper = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columes: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat (6, 60px;)
	}
`

export const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 22.5%;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: white;
	cursour: pointer;

	&:hover {
		color: #4470ad;
		transition: 0.2s ease-in-out;
		text-decoration: none;
	}
`
export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const SidebarRoute = styled(LinkS)`
	// border-radius: 50px;
	background: #4470ad;
	white-space: nowrap;
	padding: 16px 64px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursour: pointer;
	transition: all 0.2s ease-in-out;


	&:hover {
		transition: all 0.2s ease-in-out;
		background: white;
		color: #010606;
		text-decoration: none;
	}
`