import React, {useState} from 'react';
import {ResourcesContainer, ImageWrap, Image, ContentWrap, Heading, Content, Line, ButtonWrap, HighlightA} from './ResourcesElements';
import {Button} from '../ButtonElement'
import resources from '../../images/resources.svg';
import { animateScroll as scroll } from 'react-scroll';


const Resources = () => {
	const [hover, setHover] = useState(false);

	const onHover = () =>{
		setHover(!hover)
	}

	const top = () => {
   	 scroll.scrollTo();
	};

	return(
		<ResourcesContainer id="resources">
			<ImageWrap>
				<Image src={resources}>
				</Image>
			</ImageWrap>
			<Line />
			<ContentWrap>
				<Heading>Some Additional Resources</Heading>
				<Content>
					<HighlightA href="https://delhimetrorail.info/Images/delhimetro-map_eng.jpg" target="_blank">Dehli Metro Map</HighlightA>
					<br />
					<HighlightA href="https://delhimetrorail.info/delhi-metro-stations" target="_blank">List of Stations</HighlightA>
					<br />
					<HighlightA href="https://www.youtube.com/watch?v=oDqjPvD54Ss" target="_blank">Breadth-First Search Explanation </HighlightA>
					<br />
					<HighlightA href="https://www.youtube.com/watch?v=cWNEl4HE2OE&t=477s" target="_blank">Graph Traversal in Javascript </HighlightA>
				</Content>
				<ButtonWrap>
					<Button
					onMouseEnter={onHover} onMouseLeave={onHover}	
					primary="true" dark="true" 
					onClick={top} to="/">
							Back To Top
					</Button>
				</ButtonWrap>
			</ContentWrap>
			
		</ResourcesContainer>
		)
}

export default Resources;