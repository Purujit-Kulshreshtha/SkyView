import React, {useState} from 'react';
import SearchBar from './Searchbar/SearchBar'
import {allStationsList} from './stations'
import {getRoute} from './Route'
import RoutePresentation from './RoutePresentation'
import "./style.css"


const Pathfinder = () => {

	const [startStation, setStartStation] = useState(null);
	const [destination, setDestination] = useState(null);
	const [route, setRoute] = useState(null)
	const [renderRoute, setRenderRoute] = useState(false)
	const [renderMessage, setRenderMessage] = useState(false)

	const findRoute = () => {
		if (startStation && destination) {
			const temp = getRoute(startStation, destination)
			setRoute(temp)
			setRenderRoute(true)
			setRenderMessage(false)
		} else {
			setRenderMessage(true)
		}
	}

	const reset = () => {
		setStartStation(null)
		setDestination(null)
		setRenderMessage(false)
	}

	const RenderRoute = () => {
		if (renderRoute) {
			return (
				<RoutePresentation route={route} setRenderRoute={setRenderRoute} destination={destination}/>
				)
		} else {
			return (
				<>
				</>
				)
		}
	}

	const RenderMessage = () => {
		if (renderMessage) {
			return(
				<p className="message">Please select <b> starting point AND destination </b> to get a suitable route. </p> 
				)
		} else {
			return(
				<>
				</>
				)
		}
	}

	return(
		<>

			{RenderRoute()}

			<div className="pathfinder-contianer" id="pathfinder">
				<h1 className="pathfinder-heading">Select Locations</h1>

				<div className="searbar-container">
					<div className="ind-searchbar">
						<SearchBar 
						placeHolder="Enter starting point..."
						data={allStationsList}
						value={startStation}
						onChange={val => setStartStation(val)} 
					 	/>
					 </div>
					 <div className="ind-searchbar">
					 	<SearchBar 
					 	placeHolder="Enter destination..."
						data={allStationsList}
						value={destination}
						onChange={val => setDestination(val)} 
					 	/>
					 </div>
				</div>

				{RenderMessage()}

				<div className="pathfinder-buttons">
					<button className="pathfinder-reset-button" onClick={reset}>Reset</button>
					<button className="pathfinder-find-button" onClick={findRoute}>Find Route</button>
				</div>

			</div>
		</>
		)
}

export default Pathfinder;