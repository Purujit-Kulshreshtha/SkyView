import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinkTitle, FooterLink, FooterLinksContainer, FooterLinkItems, FooterLinkR, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';
import {FaSubway, FaGithub, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
	return(
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>
								Contact Us
							</FooterLinkTitle>
								<FooterLink href="https://github.com/Purujit-Kulshreshtha" target="_blank">Creator's Github Profile
								</FooterLink>
								<FooterLink href="https://www.linkedin.com/in/purujit-kulshreshtha-a149a11aa/" target="_blank">Creator's LinkedIn Profile
								</FooterLink>
								<FooterLinkR to="/contact">Contact Us Via Our Website
								</FooterLinkR> 
						</FooterLinkItems>						
					</FooterLinksWrapper>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>
								More Information
							</FooterLinkTitle>
								<FooterLink href="http://people.seas.harvard.edu/~cs125/fall16/lec8.pdf" target="_blank">Paper on Breadth-First Search
								</FooterLink>
								<FooterLink href="http://www.delhimetrorail.com/" target="_blank">Dehli Metro Website
								</FooterLink>
								<FooterLink href="https://www.pexels.com/video/inside-a-tunnel-856134/" target="_blank">Video From Pexels
								</FooterLink>
								<FooterLink href="https://undraw.co/illustrations" target="_blank">Graphics From unDraw
								</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>
								Technologies Used On Website
							</FooterLinkTitle>
								<FooterLink href="https://reactjs.org/" target="_blank">ReactJS
								</FooterLink>
								<FooterLink href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">HTML5
								</FooterLink>
								<FooterLink href="https://www.css3.info/" target="_blank">CSS3
								</FooterLink>
								<FooterLink href="https://www.javascript.com/" target="_blank">Javascript
								</FooterLink>
								<FooterLink href="https://reactrouter.com/" target="_blank">React Router
								</FooterLink>
								<FooterLink href="https://www.npmjs.com/package/react-scroll" target="_blank">React Scroll
								</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>

				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>
							SkyView  &nbsp;<FaSubway />
						</SocialLogo>
						<SocialIcons>
							<SocialIconLink href='https://github.com/Purujit-Kulshreshtha' target="_blank"><FaGithub /></SocialIconLink>
							<SocialIconLink href='https://www.linkedin.com/in/purujit-kulshreshtha-a149a11aa/' target="_blank"><FaLinkedin /></SocialIconLink>
							<SocialIconLink href='https://twitter.com/rickastley?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank"><FaTwitter /></SocialIconLink>
							<SocialIconLink href='https://www.youtube.com/channel/UCZJ8ejHCTVg20Qchx01UwAQ' target="_blank"><FaYoutube /></SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>

			</FooterWrap>
		</FooterContainer>
		)
}

export default Footer;