import React, {useState} from 'react';
import {AboutContainer, ImageWrap, Image, Image2, ContentWrap, Heading, Content, Line, ButtonWrap, Highlight, MainContainer, PurposeContainer, ContentWrapP, LineP, LineF, ImageWrap2, Bold, FutureContainer} from './AboutElements';
import {Button} from '../ButtonElement'
import graph from '../../images/graph.svg';
import purpose from '../../images/purpose.svg';
import future from '../../images/future.svg';
import instructions from '../../images/instructions.svg';



const HowItWorks = () => {

	const [hover, setHover] = useState(false);

	const onHover = () =>{
		setHover(!hover)
	}

	return(
		<MainContainer id="about">

			<PurposeContainer>
				<LineP />
				<ContentWrapP>
					<Heading>Purpose</Heading>
					<Content>The Delhi-Metro network is one of the best in the worlds, however; for anyone new to the place, visiting or going to the place they haven't been before, it can be extremely difficult to navigate. SkyView changes this by providing the best route based on the start on end locations. <br /><br /><br /></Content>
					
					
				</ContentWrapP>

				<ImageWrap>
					<Image src={purpose} />
				</ImageWrap>
				
			</PurposeContainer>


			<AboutContainer id="about">
				<ImageWrap>
					<Image src={graph}>
					</Image>
				</ImageWrap>
				<Line />
				<ContentWrap>
					<Heading>How It Works</Heading>
					<Content>SkyView solves the above problem by providing the best route based on the start on end locations. The database consists of all the metro-stations in the DMRC network, along with their respective line colours and connections.<br/><br/>The website takes the starting point, the destinations and stops (if any) and runs it through an algorithm that finds the shortest path. This algorithm is built upon the Breatdh-First Search graph-traversal techniquie and accounts for all lines, stations and edge cases. 
					<ButtonWrap>
						<Button to='pathfinder' smooth duration={500} onMouseEnter={onHover} onMouseLeave={onHover}	primary="true" dark="true" offset={-80}>
								Try It
						</Button>
					</ButtonWrap>

					For more information, feel free to


					 <Highlight to="/contact">contact the developer. </Highlight></Content>
					
				</ContentWrap>
				
			</AboutContainer>

			<FutureContainer id="about">
				<LineF />
				<ContentWrapP>
					<Heading>Future Prospects</Heading>
					<Content>Several additions/features are in process of being added to SkyView. Some major updates to come are:<br /><br /><br />
						<ul tpye="disc">
							<li><Bold>Community Building - </Bold> Users will have the ability to post information about particular stations or routes based on their experience; information such as navigation instructions, location finding etc. This will, in effect, make SkyView a community driven platform.</li>
							<br /><br />
							<li><Bold>User Info - </Bold> Users will be able to login using their Google accounts. They can then save their routes and reopen them whenever they want. This will also allow users to share routes with each other by auto-generated links.</li>
						</ul>
					</Content>
					
					
				</ContentWrapP>

				<ImageWrap2>
					<Image2 src={instructions} />
					<Image2 src={future} />
				</ImageWrap2>
				
			</FutureContainer>


		</MainContainer>

		)
}

export default HowItWorks;