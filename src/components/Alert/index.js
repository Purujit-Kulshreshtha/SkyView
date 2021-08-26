import React from 'react';
import './style.css'

const Alert = ({ color, message }) => {
	return(
			<>
				<div className={`alert-container-${color}`}>
					<h3 className={`alert-text-${color}`}>{message}</h3>
				</div>
			</>
		)
}

export default Alert;