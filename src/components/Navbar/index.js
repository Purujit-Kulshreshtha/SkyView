import React, {useState, useEffect} from 'react';
import {FaBars, FaSubway} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, 
	ChromeNav, ChromeNavbarContainer, ChromeNavLogo, ChromeMobileIcon, ChromeNavMenu, ChromeNavItem, ChromeNavLinks, ChromeNavBtn, ChromeNavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import './style.css'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

import {isFirefox, isChrome, isChromium, isEdge} from 'react-device-detect';


const Navbar = ({ toggle }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	
	const [scrollNav, setScrollNav] = useState(false);
	
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

	console.log(user)

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}	

	useEffect(() => {
		window.addEventListener('scroll', changeNav)

		const token = user?.token;
		setUser(JSON.parse(localStorage.getItem('profile')))

	}, [])

	const top = () => {
   	 scroll.scrollToTop();
	};

	const showUserMenu = () => {
		dispatch( {type: "LOGOUT"})
		history.push('/')
		setUser(null);
	}


	if (isFirefox){
			return(
						<>
							<Nav scrollNav={scrollNav}> 
								<NavbarContainer>
									<NavLogo to='/' onClick={top}
									duration={500}>SkyView &nbsp;<FaSubway /></NavLogo>
									<MobileIcon onClick={toggle}>
										<FaBars />
									</MobileIcon>
									<NavMenu>
										<NavItem>
											<NavLinks to="pathfinder"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Find Route</NavLinks>
										</NavItem>
										<NavItem>
											<NavLinks to="about"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>About</NavLinks>
										</NavItem>

										<NavItem>
											<NavLinks to="instructions"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Help</NavLinks>
										</NavItem>
										
										<NavItem>
											<NavLinks to="resources"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Resources</NavLinks>
										</NavItem>
									</NavMenu>
									<NavBtn>

										{user ? (
											<div className="nav-user-info" onClick={showUserMenu}>
												<img className="nav-profile-picture" alt={user.result.name} src={user.result.imageUrl} />
											</div>
											) : (
										<NavBtnLink to='/login'
											activeClass="active">Login</NavBtnLink>
											)
										}
									</NavBtn>
								</NavbarContainer>
							</Nav>
						</>
						)
		}

		else if (isChromium || isChrome || isEdge){
			return(
				<>
							<ChromeNav scrollNav={scrollNav}> 
								<ChromeNavbarContainer>
									<ChromeNavLogo to='/' onClick={top}
									duration={500}>SkyView &nbsp;<FaSubway /></ChromeNavLogo>
									<ChromeMobileIcon onClick={toggle}>
										<FaBars />
									</ChromeMobileIcon>
									<ChromeNavMenu>
										<ChromeNavItem>
											<ChromeNavLinks to="pathfinder"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Find Route</ChromeNavLinks>
										</ChromeNavItem>
										<ChromeNavItem>
											<ChromeNavLinks to="about"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>About</ChromeNavLinks>
										</ChromeNavItem>

										<ChromeNavItem>
											<ChromeNavLinks to="instructions"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Help</ChromeNavLinks>
										</ChromeNavItem>
										
										<ChromeNavItem>
											<ChromeNavLinks to="resources"
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Resources</ChromeNavLinks>
										</ChromeNavItem>
									</ChromeNavMenu>
									<ChromeNavBtn>
										<ChromeNavBtnLink to='contact'
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Contanct Us</ChromeNavBtnLink>
									</ChromeNavBtn>
								</ChromeNavbarContainer>
							</ChromeNav>
						</>
				)
		}

	
}

export default Navbar;