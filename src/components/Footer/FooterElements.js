import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
	background-color: #2a2a2a;
`

export const FooterWrap = styled.div`
	padding: 40px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`

export const FooterLinksWrapper = styled.div`
	display: flex;
	padding: 0 100px;

	@media screen and (max-width: 7680px){
		flex-direction: column;
		padding: 10px;
	}

`

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: white;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}	
`

export const FooterLinkTitle = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
	font-weight: bold;
`

export const FooterLink = styled.a`
	color: white;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

	&:hover{
		color: #4470ad;
		transition: 0.3s ease-out
	}
`

export const FooterLinkR = styled(Link)`
	color: white;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

	&:hover{
		color: #4470ad;
		transition: 0.3s ease-out
	}
`

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 768px){
		flex-direction: column;
	}
`

export const SocialLogo = styled.h1`
	color: white;
	justify-self: start;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`

export const SocialIconLink = styled.a`
	color: white;
	font-size: 24px;

	&:hover{
		color: #4470ad;
	}
`

export const SmallText = styled.p`
	color: white;
	font-size: 12px;
`