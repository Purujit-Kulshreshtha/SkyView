import React, {useState} from 'react';
import SearchBarComponent from './SearchBar'
import {allStationsList} from './stations'
import {PathfinderContainer, SearchWrap, RouteWrap, ButtonWrap, BarsWrap, Heading, SearchBarWrap, Divider, Heading2, PlaceholderWrapper} from './PathfinderElements'
// import {ButtonNormal as Button} from '../ButtonElement'
import Route from './Route'
// import Legend from './Legend'
import './routeElements.css'


const Pathfinder = () => {

	const [startStation, setStartStation] = useState(null);
	const [destination, setDestination] = useState(null);
	// const [clicked, setClicked] = useState(false);

	// const setClickedValue = () => {
	// 	setClicked(!clicked)
	// }

	return(
		<PathfinderContainer id="pathfinder">


			<SearchWrap>
			<Heading>Enter Locations</Heading>

				<BarsWrap>

					<SearchBarWrap>
						<SearchBarComponent placeHolder="Enter starting point..." 
							data={allStationsList}
							value={startStation}
							onChange={val => setStartStation(val)}  />
					</SearchBarWrap>

					<SearchBarWrap>
						<SearchBarComponent placeHolder="Enter Destination..." 
							data={allStationsList}
							value={destination}
							onChange={val => setDestination(val)}  />
					</SearchBarWrap>

				</BarsWrap>
				<ButtonWrap>
					{/*<Button onClick={setClickedValue} primary={true} dark={true}>Compute Route</Button>*/}
				</ButtonWrap>

			</SearchWrap>

			<Divider />

			<RouteWrap>

				{/*{!clicked > 0 ? <div className="placeholderWrapper">*/}
					{/*<h1>Your route will appear here... </h1>*/}
				{/*</div> : <Route startStation={startStation} endStation={destination} />}*/}

				{!destination ? <PlaceholderWrapper>
								<Heading2>Your Route Will Appear Here</Heading2>
							</PlaceholderWrapper> : <Route startStation={startStation} endStation={destination} />}
				
			</RouteWrap>

		</PathfinderContainer>
		)
}

export default Pathfinder;