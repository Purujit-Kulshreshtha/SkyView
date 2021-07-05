import React, {useState, useEffect} from 'react';
import {FaBars, FaSubway} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, 
	ChromeNav, ChromeNavbarContainer, ChromeNavLogo, ChromeMobileIcon, ChromeNavMenu, ChromeNavItem, ChromeNavLinks, ChromeNavBtn, ChromeNavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

import {isFirefox, isChrome, isChromium, isEdge} from 'react-device-detect';


const Navbar = ({ toggle }) => {
	
	const [scrollNav, setScrollNav] = useState(false);
		

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
			console.log(scrollNav)
		} else {
			setScrollNav(false)
		}
	}	

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const top = () => {
   	 scroll.scrollToTop();
	};


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
										<NavBtnLink to='contact'
											activeClass="active"
										    spy={true}
										    smooth={true}
										    offset={-80}
										    duration={500}>Contanct Us</NavBtnLink>
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