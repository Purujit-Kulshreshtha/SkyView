import React, {useState} from 'react';
import {InstructionsContainer, ImageWrap, ContentWrap, Heading, Content, Line, ButtonWrap, Ul} from './InstructionsElements';
import {Button} from '../ButtonElement'
import Legend from './Legend'
// import instructionsIMG from '../../images/instructions.svg'


const Instructions = () => {

	const [hover, setHover] = useState(false);

	const onHover = () =>{
		setHover(!hover)
	}

	return(
		<InstructionsContainer id="instructions">
			<Line />
			<ContentWrap>
				<Heading>How To Use</Heading>
				<Content>
				<Ul>
				<li>Select your starting point from the dropdown (you can type to filter options). </li>
				<li>Simillarly, select your destination. </li>		
				<li>Once both are selected, a route will appear on the right side of the screen (down below on smaller screens, please scroll). Names of all sations on your route will be given, the colour of the line indicates the line of metro you have to take.</li>
				</Ul>
				<ButtonWrap>
					<Button to='pathfinder' smooth duration={500} onMouseEnter={onHover} onMouseLeave={onHover}	primary="true" dark="true" offset={-80}>
							Try It
					</Button>
				</ButtonWrap>

				</Content>
				
			</ContentWrap>
			
			<ImageWrap>
				<Legend />
			</ImageWrap>
		</InstructionsContainer>
		)
};

export default Instructions;