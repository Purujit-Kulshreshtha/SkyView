import {redStations, yellowStations, blueStations, blue2Stations, greenStations, green2Stations, rapidStations, airportExpressStations, pinkStations, violetStations, magentaStations, aquaStations, grayStations, redConnections, yellowConnections, blueConnections, blue2Connections, greenConnections, green2Connections, rapidConnections, airportExpressConnections, pinkConnections, violetConnections, magentaConnections, aquaConnections, grayConnections} from './stations'

//LENGTH OF ALL LINES
	const redLength = redStations.length
	const yellowLength = yellowStations.length 
	const blueLength = blueStations.length
	const airportExpressLength = airportExpressStations.length
	const greenLength = greenStations.length
	const rapidLength = rapidStations.length
	const violetLength = violetStations.length
	const magentaLength = magentaStations.length
	const pinkLength = pinkStations.length
	const blue2Length = blue2Stations.length
	const green2Length = green2Stations.length
	const aquaLength = aquaStations.length
	const grayLength = grayStations.length

const getPointColor = (point) => {
	if (redStations.includes(point)){
		return "RED";
	} else if (yellowStations.includes(point)) {
		return "YELLOW";
	} else if (blueStations.includes(point)) {
		return "BLUE";
	} else if (greenStations.includes(point)) {
		return "GREEN";
	} else if (violetStations.includes(point)) {
		return "VIOLET";
	} else if (magentaStations.includes(point)) {
		return "MAGENTA";
	} else if (airportExpressStations.includes(point)) {
		return "AIRPORT";
	} else if (pinkStations.includes(point)) {
		return "PINK";
	} else if (blue2Stations.includes(point)) {
		return "BLUE2";
	} else if (green2Stations.includes(point)) {
		return "GREEN2";
	} else if (rapidStations.includes(point)) {
		return "RAPID";
	} else if (grayStations.includes(point)) {
		return "GRAY";
	} else if (aquaStations.includes(point)) {
		return "AQUA";
	} 
}

const routeComputer = (startStation, endStation) => {

	const graph = new Map()
	var currentStation;
	var nextStation;
	var previousStation;
	var connection;
	// const [count, setCount] = useState(1)


	// ADDING ALL STATIONS TO graph-LIST
		// ADD RED LINE STATIONS TO graph-LIST
			for (let i = 0; i < redLength; i++) {
				currentStation = `RED ${redStations[i]}`
				if (i === 0){
					nextStation = `RED ${redStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === redLength-1) {
					previousStation = `RED ${redStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `RED ${redStations[i+1]}`
					previousStation = `RED ${redStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of redConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD YELLOW LINE STATIONS TO graph-LIST
			for (let i = 0; i < yellowLength; i++) {
				currentStation = `YELLOW ${yellowStations[i]}`
				if (i === 0){
					nextStation = `YELLOW ${yellowStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === yellowLength-1) {
					previousStation = `YELLOW ${yellowStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `YELLOW ${yellowStations[i+1]}`
					previousStation = `YELLOW ${yellowStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of yellowConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD BLUE LINE STATIONS TO graph-LIST
			for (let i = 0; i < blueLength; i++) {
				currentStation = `BLUE ${blueStations[i]}`
				if (i === 0){
					nextStation = `BLUE ${blueStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === blueLength-1) {
					previousStation = `BLUE ${blueStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `BLUE ${blueStations[i+1]}`
					previousStation = `BLUE ${blueStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of blueConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD AIRPORT LINE STATIONS TO graph-LIST
			for (let i = 0; i < airportExpressLength; i++) {
				currentStation = `AIRPORT ${airportExpressStations[i]}`
				if (i === 0){
					nextStation = `AIRPORT ${airportExpressStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === airportExpressLength-1) {
					previousStation = `AIRPORT ${airportExpressStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `AIRPORT ${airportExpressStations[i+1]}`
					previousStation = `AIRPORT ${airportExpressStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of airportExpressConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD GREEN LINE STATIONS TO graph-LIST
			for (let i = 0; i < greenLength; i++) {
				currentStation = `GREEN ${greenStations[i]}`
				if (i === 0){
					nextStation = `GREEN ${greenStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === greenLength-1) {
					previousStation = `GREEN ${greenStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `GREEN ${greenStations[i+1]}`
					previousStation = `GREEN ${greenStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of greenConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD RAPID LINE STATIONS TO graph-LIST
			for (let i = 0; i < rapidLength; i++) {
				currentStation = `RAPID ${rapidStations[i]}`
				if (i === 0){
					nextStation = `RAPID ${rapidStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === rapidLength-1) {
					previousStation = `RAPID ${rapidStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `RAPID ${rapidStations[i+1]}`
					previousStation = `RAPID ${rapidStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of rapidConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD VIOLET LINE STATIONS TO graph-LIST
			for (let i = 0; i < violetLength; i++) {
				currentStation = `VIOLET ${violetStations[i]}`
				if (i === 0){
					nextStation = `VIOLET ${violetStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === violetLength-1) {
					previousStation = `VIOLET ${violetStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `VIOLET ${violetStations[i+1]}`
					previousStation = `VIOLET ${violetStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of violetConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD MAGENTA LINE STATIONS TO graph-LIST
			for (let i = 0; i < magentaLength; i++) {
				currentStation = `MAGENTA ${magentaStations[i]}`
				if (i === 0){
					nextStation = `MAGENTA ${magentaStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === magentaLength-1) {
					previousStation = `MAGENTA ${magentaStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `MAGENTA ${magentaStations[i+1]}`
					previousStation = `MAGENTA ${magentaStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of magentaConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD PINK LINE STATIONS TO graph-LIST
			for (let i = 0; i < pinkLength; i++) {
				currentStation = `PINK ${pinkStations[i]}`
				if (i === 0){
					nextStation = `PINK ${pinkStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === pinkLength-1) {
					previousStation = `PINK ${pinkStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `PINK ${pinkStations[i+1]}`
					previousStation = `PINK ${pinkStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of pinkConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}



		// ADD BLUE2 LINE STATIONS TO graph-LIST
			for (let i = 0; i < blue2Length; i++) {
				currentStation = `BLUE2 ${blue2Stations[i]}`
				if (i === 0){
					nextStation = `BLUE2 ${blue2Stations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === blue2Length-1) {
					previousStation = `BLUE2 ${blue2Stations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `BLUE2 ${blue2Stations[i+1]}`
					previousStation = `BLUE2 ${blue2Stations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of blue2Connections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD GREEN2 LINE STATIONS TO graph-LIST
			for (let i = 0; i < green2Length; i++) {
				currentStation = `GREEN2 ${green2Stations[i]}`
				if (i === 0){
					nextStation = `GREEN2 ${green2Stations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === green2Length-1) {
					previousStation = `GREEN2 ${green2Stations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `GREEN2 ${green2Stations[i+1]}`
					previousStation = `GREEN2 ${green2Stations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of green2Connections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD AQUA LINE STATIONS TO graph-LIST
			for (let i = 0; i < aquaLength; i++) {
				currentStation = `AQUA ${aquaStations[i]}`
				if (i === 0){
					nextStation = `AQUA ${aquaStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === aquaLength-1) {
					previousStation = `AQUA ${aquaStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `AQUA ${aquaStations[i+1]}`
					previousStation = `AQUA ${aquaStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of aquaConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}

		// ADD GRAY LINE STATIONS TO graph-LIST
			for (let i = 0; i < grayLength; i++) {
				currentStation = `GRAY ${grayStations[i]}`
				if (i === 0){
					nextStation = `GRAY ${grayStations[i+1]}`
					graph.set(currentStation, [i, nextStation])
				} else if (i === grayLength-1) {
					previousStation = `GRAY ${grayStations[i-1]}`
					graph.set(currentStation, [i, previousStation])
				} else {
					nextStation = `GRAY ${grayStations[i+1]}`
					previousStation = `GRAY ${grayStations[i-1]}`
					graph.set(currentStation, [i, previousStation, nextStation])
				}
			}
			for (connection of grayConnections) {
				graph.set(connection[0], [...graph.get(connection[0]), connection[1]])
			}
	

	const pathfindingHolder =  (start, end) => {

		const stationsBefore = new Set()
		const stationsAfter = new Set()

		// stationsBefore.add(start)
		// stationsAfter.add(start)

		var destination;
		// var count;

		const startNumber = graph.get(start)[graph.get(start).length - 1]
		// const endNumber = graph.get(end)[graph.get(end).length - 1]

		const backtrack = (start, end, path) => {

			const backtracked = [end]
			var current = ""

			while (current !== start) {
				current = backtracked[backtracked.length -1]
				var parent = path.get(current)
				backtracked.push(parent)
				current = parent
			}

			const route = backtracked.reverse()
			return route;
		}

		const breathFirstPathfinding = (start, end) => {
			
			const queue = [start]

			var found = false
			// var stationBeingAddedToQ = ""

			const visited = new Set()
			const relationMap = new Map()

			while (queue.length > 0) {

				const station = queue.shift()				

				const destinations = graph.get(station).slice(1, graph.get(station).length)

				for (destination of destinations) {

					if (!relationMap.has(destination)){
						relationMap.set(destination, station)
					}
					// count += 1
					const destinationNumber = graph.get(destination)[0]


					if (destination === end) {
						// console.log("DESTINATION FOUND")
						found = true
						return backtrack(start, end, relationMap);
						break;
					}

					if (!visited.has(destination)) {

						if (destinationNumber < startNumber) {
						stationsBefore.add(destination)
						} else {
							stationsAfter.add(destination)
						}

						visited.add(destination)
						queue.push(destination)
					}

				}

				if (found) {
					break
				}
			}
		}


		// const depthFirstPathfinding = (start, end, visited = new Set()) => {

		// 	visited.add(start)

		// 	const destinations = graph.get(start).slice(1, graph.get(start).length)
		// 	const startNumber = graph.get(start)[graph.get(start).length - 1]

		// 	for (const destination of destinations) {
		// 		// count+=1

		// 		// console.log(`${destination}:   ${graph.get(destination)[graph.get(destination).length - 1]}`)

		// 		const destinationNumber = graph.get(destination)[graph.get(destination).length - 1]

		// 		if (destination === end) {
		// 			return;
		// 		}

		// 		if (!visited.has(destination)) {
		// 			if (destinationNumber < startNumber) {
		// 				stationsBefore.add(destination)
		// 			} else {
		// 				stationsAfter.add(destination)
		// 			}
		// 			depthFirstPathfinding(destination, end, visited)
		// 		}
		// 	}
		// }

		//const route =  depthFirstPathfinding(start, end)
		const route = breathFirstPathfinding(start, end)

		return route;
		// stationsBefore.add(end)
		// stationsAfter.add(end)
	}

	return pathfindingHolder(startStation, endStation)

}

export const getRoute = (startStation, endStation) => {
	const startColor = getPointColor(startStation)
	const start = `${startColor} ${startStation}`
	const endColor = getPointColor(endStation)
	const end = `${endColor} ${endStation}`
	const finalRoute = routeComputer(start, end)
	return finalRoute;
}