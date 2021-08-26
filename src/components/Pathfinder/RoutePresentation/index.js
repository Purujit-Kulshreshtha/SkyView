import React from 'react';
import MapRender from './map';
import "./style.css"

const RoutePresentation = ({route, setRenderRoute, destination}) => {

	return(
			<>
				<div className="route-render-obeverlay">

					<div className="route-render-modal">

						<div className="route-render-header">
							<h3 className="route-render-heading">
								Your Route
							</h3>
						</div>

						<div className="route-render-container">

							<div className="map-container">
								{route.map((station) => {
									return(
										<MapRender station={station} destination={destination} />
										)
								})}
							</div>

						</div>

						<div className="route-render-footer">
							<button className="route-close-button" onClick={() => setRenderRoute(false)}>Close</button>
						</div>

					</div>

				</div>
			</>
		)
}

export default RoutePresentation;