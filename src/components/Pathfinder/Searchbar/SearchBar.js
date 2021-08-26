import React, {useState, useRef, useEffect} from 'react';
import './searchbarStyles.css';


const SearchBar = ({placeHolder, data, value, onChange}) => {

	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const ref = useRef(null);

	useEffect(() => {
		["click", 'touchend'].forEach(
			e => {
				document.addEventListener(e, toggle)
			}
			)

		return () => {
			["click", 'touchend'].forEach(
			e => {
				document.removeEventListener(e, toggle)
			}
			)
		}
	}, [])

	const toggle = (e) => {
		setOpen(e && e.target === ref.current)
	}

	const selectStation = (station) => {
		setQuery("")
		onChange(station)
		setOpen(false)
	}

	return(
		<>
			<div className="dropdown">

				<div className="control">
					<div className="selected-value">

						<input type="text" ref={ref} placeHolder={value ? value : placeHolder} value={value || query} onChange={e => {
							setQuery(e.target.value)
							onChange(null)
							}} 
							onClick={toggle}
							onTouchEnd={toggle}
							 />
							

					</div>
					<div className={`arrow ${open ? "open" : null}`}>

					</div>
				</div>

				<div className={`options ${open ? "open" : null}`}>
					{
						data.map((station, index) => {

							if (station.includes(query)) {
								return(
							<div 
							key={index}
							className={`option ${value === station ? "selected" : null }`} 
							onClick={() => {selectStation(station)}}
							onTouchEnd={() => {selectStation(station)}}
							>{station}</div>)
							} 
							return <></>;
							
						})
					}
				</div>

			</div>
		</>
		)
};

export default SearchBar