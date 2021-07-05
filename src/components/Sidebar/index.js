import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='pathfinder' onClick={toggle} duration={500} offset={-80} smooth>Find Route</SidebarLink>
					<SidebarLink to='about' onClick={toggle} duration={500} offset={-80} smooth>About</SidebarLink>
					<SidebarLink to='future' onClick={toggle} duration={500} offset={-80} smooth>Help</SidebarLink>
					<SidebarLink to='resources' onClick={toggle} duration={500} offset={-80} smooth>Resources</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
			<SideBtnWrap>
				<SidebarRoute to='contact' onClick={toggle}duration={500} offset={-80} smooth>Contact Us</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
		)
}

export default Sidebar;