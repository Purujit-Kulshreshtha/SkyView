import React, {useState} from 'react';
import {HeroContainer, HeroBg, VideoBg, Overlay, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'
import {Button} from '../ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {

	const [hover, setHover] = useState(false);

	const onHover = () =>{
		setHover(!hover)
	}

	return(
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<Overlay />

			<HeroContent>
				<HeroH1>An Easier Way To Explore Delhi(NCR)</HeroH1>
				<HeroP>
					Find the metro route best suited for you.
				</HeroP>
				<HeroBtnWrapper>
					<Button to='pathfinder' smooth duration={500} onMouseEnter={onHover} onMouseLeave={onHover}					primary="true" dark="true" offset={-80}>
						Find Route
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
		)
}

export default HeroSection