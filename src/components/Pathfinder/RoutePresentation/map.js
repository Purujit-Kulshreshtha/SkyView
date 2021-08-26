import React from 'react';
import "./style.css"

const MapRender = ({station, destination}) => {

	const split = station.split(" ")
	const color = split[0]
	const nameList = split.slice(1, split.length)
	var name = ""

	nameList.forEach((stationName) => {
		if (nameList.indexOf(stationName) === 0){
			name += `${stationName}`
		} else {
			name += ` ${stationName}`
		}
	})

	const showStationWidget = () => {

	}

	const openStationPage = () => {
		
	}

	if (name === destination) {

			return(
				<>
					<div className="station-container">

							<div className={`dot`}></div>
							<p className={"station-name"} onHover={showStationWidget} onClick={openStationPage}>{name}</p>

					</div>
				</>
			)
	} else {

			return(
					<>
						<div className="station-container">

							<div className={`dot`}></div>
							<p className={"station-name"} onHover={showStationWidget} onClick={openStationPage}>{name}</p>
							<div className={`dash ${color}`}></div>

						</div>
					</>
				)

	}

}

export default MapRender;