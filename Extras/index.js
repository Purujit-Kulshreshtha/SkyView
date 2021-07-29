const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const arr = [[1, "none", "MJ Park"], [2, "BLUE", "Rajiv Chawkkkkkkkk"], [3, "YELLOW", "New Delhi"], [4, "RED", "Welcome"], [5, "GREEN", "Vaishali"], [6, "PINK", "MJ Park"], [7, "VIOLET", "Rajiv Chawkkkkkkkk"], [8, "MAGENTA", "New Delhi"], [9, "AIRPORT", "Sector 51"], [10, "AQUA", "New Delhi"], [11, "GRAY", "Sector 51"]]


const path = [
  'BLUE Noida Sector 52',
  'BLUE Noida Sector 34',
  'BLUE Noida City Center',
  'BLUE Golf Course',
  'BLUE Botanical Garden',
  'BLUE Noida Sector 18',
  'BLUE Noida Sector 16',
  'BLUE Noida Sector 15',
  'BLUE New Ashok Nagar',
  'BLUE Mayur Vihar Extention',
  'BLUE Mayur Vihar Phase-1',
  'BLUE Akshardham',
  'BLUE Yamuna Bank',
  'BLUE Indraprastha',
  'BLUE Supreme Court (Pragati Maidan)',
  'BLUE Mandi House',
  'BLUE Barakhamba',
  'BLUE Rajiv Chowk',
  'YELLOW Rajiv Chowk',
  'YELLOW New Delhi',
  'AIRPORT New Delhi-Airport Express',
  'AIRPORT Shivaji Stadium',
  'AIRPORT Dhaula Kuan',
  'AIRPORT Delhi Aerocity',
  'AIRPORT IGI Airport'
]

function routeMaker(arr) {
	const route = []
	var count = 1

	for (station of path) {
		const temp = station.split(" ")
		const color = temp[0]
		const name = temp[1]
		route.push([count, color, name])
		count ++;
	}
	return route;
}

function draw(arr) {

	for (station of arr) {
		if (station[1] !== "none") {

			const color = station[1]
			var lineColor = "#000"

			switch(color){
				case "YELLOW":
					lineColor = "#f6ff00";
					break
				case "BLUE":
					lineColor = "#372aa8"
					break
				case "BLUE2":
					lineColor = "#372aa8"
					break
				case "RED":
					lineColor = "#a82a41"
					break	
				case "GREEN": 
					lineColor = "#1ad102"
					break
				case "GREEN2": 
					lineColor = "#1ad102"
					break
				case "RAPID": 
					lineColor = "#2a2a2a"
					break
				case "AIRPORT":
					lineColor = "#ff8400"
					break
				case "VIOLET": 
					lineColor = "#720d91"
					break
				case "MAGENTA": 
					lineColor = "#ab055e"
					break
				case "AQUA": 
					lineColor = "#05ab8f"
					break
				case "PINK":
					lineColor = "#ffc7ee"
					break
				case "GRAY":
					lineColor = "#404040"
					break
				default:
					lineColor = "#000"
			}

			var yPos = 50*station[0]
			var xPos = 47.5


			context.fillStyle = lineColor;
			context.fillRect(xPos, yPos, 5, 50);
		} 
	}

	for (station of arr) {
		const val = station[0]
		context.fillStyle = "#444";
		context.beginPath();
		context.arc(50, 50*val+50, 7.5, 0, Math.PI * 2)
		context.closePath()
		context.fill()
		context.font = '20px Arial';
		context.textAlighn = 'center';
		context.fillStyle = 'black';

		var text = station[2]
		if (text.length > 15) {
			text = `${text.slice(0, 15)}...`
		}
		context.fillText(text, 80, 50*station[0] + 55);
	}
}
	
route = routeMaker(path)
console.log(route)

draw(route)
