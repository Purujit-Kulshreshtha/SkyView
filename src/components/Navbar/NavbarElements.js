import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
	// background: black;
	height: 80px;
	margin-top: -80px;
	dispaly: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: 0.2s all ease;


	@media screen and(max-width: 768px) {
		transition: 0.8s all ease;
	}
`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1
	width: 100%;
	padding: 0 24px;
	padding-right: 0px;
	max-width: 1100px;	
`

export const NavLogo = styled(LinkR)`
	color: white;
	justify-self: flex-start;
	cursour: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	

	&:hover {
		color: #4470ad;
		text-decoration: none;
	}
`

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 35%);
		font-size: 1.8rem;
		cursour: pointer;
		color: white;

		&:hover {
			color: #4470ad;
		}
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
`

export const NavLinks = styled(LinkS)`
	color: white;
	display: flex;
	align-items: center;
	cursour: pointer;
	text-decoration: none;
	padding: 0 3rem;
	height: 110%;
	font-size: 1.5rem;

	&:hover {
		color: #4470ad;
		text-decoration: none;
	}

	&.active {
		border-bottom: 3px solid #4470ad;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width:768px) {
		display: none;
	}
`

export const NavBtnLink = styled(LinkS)`
	// border-radius: 50px;
	background: #4470ad;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	margin-right: -100px;
	cursour: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;


	&:hover {
		transition: all 0.2s ease-in-out;
		background: white;
		color: #010606;
		text-decoration: none;
	}
`






export const ChromeNav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
	// background: red;
	height: 80px;
	margin-top: -80px;
	dispaly: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: 0.2s all ease;


	@media screen and(max-width: 768px) {
		transition: 0.8s all ease;
	}
`

export const ChromeNavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1
	width: 100%;
	padding: 0 24px;
	padding-right: 0px;
	max-width: 1100px;	
`

export const ChromeNavLogo = styled(LinkR)`
	color: white;
	justify-self: flex-start;
	cursour: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	

	&:hover {
		color: #4470ad;
		text-decoration: none;
	}
`

export const ChromeMobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 20%);
		font-size: 1.8rem;
		cursour: pointer;
		color: white;

		&:hover {
			color: #4470ad;
		}
	}
`

export const ChromeNavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -10px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const ChromeNavItem = styled.li`
	height: 80px;
`

export const ChromeNavLinks = styled(LinkS)`
	color: white;
	display: flex;
	align-items: center;
	cursour: pointer;
	text-decoration: none;
	padding: 0 3rem;
	height: 112.5%;
	font-size: 1.2rem;

	&:hover {
		color: #4470ad;
		text-decoration: none;
	}

	&.active {
		border-bottom: 3px solid #4470ad;
	}
`

export const ChromeNavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: -100px;

	@media screen and (max-width:768px) {
		display: none;
	}
`

export const ChromeNavBtnLink = styled(LinkS)`
	// border-radius: 50px;
	background: #4470ad;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	margin-right: -100px;
	cursour: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;


	&:hover {
		transition: all 0.2s ease-in-out;
		background: white;
		color: #010606;
		text-decoration: none;
	}
`