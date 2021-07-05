import React from 'react';
import './routeElements.css';


const Legend = () => {

	const colorsList = ["Red",
						"Yellow",
						"Blue",
						"Airport (Orange)",
						"Pink",
						"Violet",
						"Magenta",
						"Rapid",
						"Green",
						"Aqua",
						"Gray"]

	return(
		<>
		<h1 className="Heading">Color Key</h1>
		<div className="colorWrapper">
			{colorsList.map((color) => {
				return(
					<div className="itemsWrapper">
						<div className={`box ${color.toUpperCase()}`} />
						<p className="colorName">{color}</p>
					</div>
					)
			})}
		</div>
		</>
		)
}

export default Legend;