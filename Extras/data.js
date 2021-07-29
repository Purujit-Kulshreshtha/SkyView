const adj = new Map()

//LISTS OF STATIONS ON EACH LINE
	const allStationsList = [
	"Shaheed Sthal(New Bus Adda)",
	"Hindon River",
	"Arthala",
	"Mohan Nagar",
	"Shyam park",
	"Major Mohit Sharma",
	"Raj Bagh",
	"Shaheed Nagar",
	"Dilshad Garden",
	"Jhil Mil",
	"Mansarovar Park",
	"Shahdara",
	"Welcome",
	"Seelampur",
	"Shastri Park",
	"Kashmere Gate",
	"Tis Hazari",
	"Pul Bangash",
	"Pratap Nagar",
	"Shastri Nagar",
	"Inderlok",
	"Kanhaiya Nagar",
	"Keshav Puram",
	"Netaji Subash Place",
	"Kohat Enclave",
	"Pitam Pura",
	"Rohini East",
	"Rohini West",
	"Rithala",
	"Samaypur Badli",
	"Rohini Sector 18-19",
	"Haiderpur Badli Mor",
	"Jahangirpuri",
	"Adarsh Nagar",
	"Azadpur",
	"Model Town",
	"Guru Tegh Bahadur Nagar",
	"Vishwavidyalaya",
	"Vidhan Sabha",
	"Civil Lines",
	"Kashmere Gate",
	"Chandni Chowk",
	"Chawri Bazar",
	"New Delhi",
	"Rajiv Chowk",
	"Patel Chowk",
	"Central Secretariat",
	"Udyog Bhawan",
	"Lok Kalyan Marg",
	"Jorbagh",
	"Dilli Haat INA",
	"AIIMS",
	"Green Park",
	"Hauz Khas",
	"Malviya Nagar",
	"Saket",
	"Qutab Minar",
	"Chhattarpur",
	"Sultanpur",
	"Ghitorni",
	"Arjan Garh",
	"Guru Dronacharya",
	"Sikandarpur",
	"MG Road",
	"IFFCO Chowk",
	"Huda City Centre",
	"Dwarka Sector 21",
	"Dwarka Sector 8",
	"Dwarka Sector 9",
	"Dwarka Sector 10",
	"Dwarka Sector 11",
	"Dwarka Sector 12",
	"Dwarka Sector 13",
	"Dwarka Sector 14",
	"Dwarka",
	"Dwarka Mor",
	"Nawada",
	"Uttam Nagar West",
	"Uttam Nagar East",
	"Janak Puri West",
	"Janak Puri East",
	"Tilak Nagar",
	"Subhash Nagar",
	"Tagore Garden",
	"Rajouri Garden",
	"Ramesh Nagar",
	"Moti Nagar",
	"Kirti Nagar",
	"Shadipur",
	"Patel Nagar",
	"Rajendra Place",
	"Karol Bagh",
	"Jhandewalan",
	"R K Ashram Marg",
	"Rajiv Chowk",
	"Barakhamba",
	"Mandi House",
	"Supreme Court (Pragati Maidan)",
	"Indraprastha",
	"Yamuna Bank",
	"Akshardham",
	"Mayur Vihar Phase-1",
	"Mayur Vihar Extention",
	"New Ashok Nagar",
	"Noida Sector 15",
	"Noida Sector 16",
	"Noida Sector 18",
	"Botanical Garden",
	"Golf Course",
	"Noida City Center",
	"Noida Sector 34",
	"Noida Sector 52",
	"Noida Sector 61",
	"Noida Sector 59",
	" Noida Sector 62",
	"Noida Electronic City",
	"New Delhi-Airport Express",
	"Shivaji Stadium",
	"Dhaula Kuan",
	"Delhi Aerocity",
	"IGI Airport",
	"Dwarka Sector 21",
	"Inderlok",
	"Ashok Park Main",
	"Punjabi Bagh",
	"Shivaji Park",
	"Madipur",
	"Paschim Vihar (East)",
	"Paschim Vihar (West)",
	"Peera Garhi",
	"Udyog Nagar",
	"Maharaja Surajmal Stadium",
	"Nangloi",
	"Nangloi Railway Station",
	"Rajdhani Park",
	"Mundka",
	"Mundka Industrial Area (MIA)",
	"Ghevra Metro station",
	"Tikri Kalan",
	"Tikri Border",
	"Pandit Shree Ram Sharma",
	"Bahdurgarh City",
	"Brigadier Hoshiar Singh",
	"Sector 55-66 (Rapid Metro)",
	"Sector 54 Chowk (Rapid Metro)",
	"Sector 53-54 (Rapid Metro)",
	"Sector 42-43 (Rapid Metro)",
	"DLF Phase 1 (Rapid Metro)",
	"Sikandarpur (Rapid Metro)",
	"DLF Phase 2 (Rapid Metro)",
	"Belvedere Towers (Rapid Metro)",
	"Cyber City (Rapid Metro)",
	"Moulsari Avenue (Rapid Metro)",
	"DLF Phase 3 (Rapid Metro)",
	"Kashmere Gate",
	"Lal Quila",	
	"Jama Masjid",
	"Delhi Gate",
	"ITO",
	"Mandi House",
	"Janpath",
	"Central Secretariat",
	"Khan Market",
	"Jawaharlal Nehru Stadium",
	"Jangpura",
	"Lajpat Nagar",
	"Moolchand",
	"Kailash Colony",
	"Nehru Place",
	"Kalkaji Mandir",
	"Govind Puri",
	"Okhla",
	"Jasola",
	"Sarita Vihar",
	"Mohan Estate",
	"Tughlakabad",
	"Badarpur Border",
	"Sarai",
	"N.H.P.C. Chowk",
	"Mewala Maharajpur",
	"Sector 28 Faridabad",
	"Badkal Mor",
	"Old Faridabad",
	"Neelam Chowk Ajronda",
	"Bata Chowk",
	"Escorts Mujesar",
	"Sant Surdas - Sihi",
	"Raja Nahar Singh",
	"Janak Puri West",
	"Dabri Mor - Janakpuri South",
	"Dashrath Puri",
	"Palam",
	"Sadar Bazaar Cantonment",
	"Terminal 1 IGI Airport",
	"Shankar Vihar",
	"Vasant Vihar",
	"Munirka",
	"RK Puram",
	"IIT Delhi",
	"Hauz Khas",
	"Panchsheel Park",
	"Chirag Delhi",
	"Greater Kailash",
	"Nehru Enclave",
	"Kalkaji Mandir",
	"Okhla NSIC",
	"Sukhdev Vihar",
	"JAMIA MILLIA ISLAMIA",
	"Okhla Vihar",
	"Jasola Vihar Shaheen Bagh",
	"Kalindi Kunj",
	"Okhla Bird Sanctuary",
	"Botanical Garden",
	"Majlis Park",
	"Azadpur",
	"Shalimar Bagh",
	"Netaji Subash Place",
	"Shakurpur",
	"Punjabi Bagh West",
	"ESI BASAI DARAPUR",
	"Rajouri Garden",
	"Maya Puri",
	"Naraina Vihar",
	"Delhi Cantt",
	"Durgabai Deshmukh South Campus",
	"Sir Vishweshwaraiah Moti Bagh",
	"Bhikaji Cama Place",
	"Sarojini Nagar",
	"Dilli Haat INA",
	"South Extension",
	"Lajpat Nagar",
	"Vinobapuri",
	"Ashram",
	"Sarai Kale Khan Hazrat Nizamuddin",
	"Mayur Vihar Phase-1",
	"Mayur Vihar Pocket I",
	"Trilokpuri Sanjay Lake",
	"Vinod Nagar East",
	"Mandawali - West Vinod Nagar",
	"IP Extension",
	"Anand Vihar",
	"Karkar Duma",
	"Karkarduma Court",
	"Krishna Nagar",
	"East Azad Nagar",
	"Welcome",
	"Jaffrabad",
	"Maujpur",
	"Gokulpuri",
	"Johri Enclave",
	"Shiv Vihar",
	"Yamuna Bank",
	"Laxmi Nagar",
	"Nirman Vihar",
	"Preet Vihar",
	"Karkar Duma",
	"Anand Vihar",
	"Kaushambi",
	"Vaishali",
	"Ashok Park Main",
	"Satguru Ram Singh Marg",
	"Kirti Nagar",
	"Noida Sector 51",
	"Noida Sector 50",
	"Noida Sector 76",
	"Noida Sector 101",
	"Noida Sector 81",
	"NSEZ Noida",
	"Noida Sector 83",
	"Noida Sector 137",
	"Noida Sector 142",
	"Noida Sector 143",
	"Noida Sector 144",
	"Noida Sector 145",
	"Noida Sector 146",
	"Noida Sector 147",
	"Noida Sector 148",
	"Knowledge Park II",
	"Pari Chowk Greater Noida",
	"Alpha 1 Greater Noida",
	"Delta 1 Greater Noida",
	"GNIDA Office",
	"Depot Greater Noida",
	"Dwarka",
	"Nangli",
	"Najafgarh"
	]

	const redStations = [
	"Shaheed Sthal(New Bus Adda)",
	"Hindon River",
	"Arthala",
	"Mohan Nagar",
	"Shyam park",
	"Major Mohit Sharma",
	"Raj Bagh",
	"Shaheed Nagar",
	"Dilshad Garden",
	"Jhil Mil",
	"Mansarovar Park",
	"Shahdara",
	"Welcome",
	"Seelampur",
	"Shastri Park",
	"Kashmere Gate",
	"Tis Hazari",
	"Pul Bangash",
	"Pratap Nagar",
	"Shastri Nagar",
	"Inderlok",
	"Kanhaiya Nagar",
	"Keshav Puram",
	"Netaji Subash Place",
	"Kohat Enclave",
	"Pitam Pura",
	"Rohini East",
	"Rohini West",
	"Rithala"
	]

	const redConnections = [
	["RED Welcome", "PINK Welcome"],
	["RED Kashmere Gate", "VIOLET Kashmere Gate"],
	["RED Inderlok", "GREEN Inderlok"],
	["RED Netaji Subash Place", "PINK Netaji Subash Place"]
	]

	const yellowStations = ["Samaypur Badli",
	"Rohini Sector 18-19",
	"Haiderpur Badli Mor",
	"Jahangirpuri",
	"Adarsh Nagar",
	"Azadpur",
	"Model Town",
	"Guru Tegh Bahadur Nagar",
	"Vishwavidyalaya",
	"Vidhan Sabha",
	"Civil Lines",
	"Kashmere Gate",
	"Chandni Chowk",
	"Chawri Bazar",
	"New Delhi",
	"Rajiv Chowk",
	"Patel Chowk",
	"Central Secretariat",
	"Udyog Bhawan",
	"Lok Kalyan Marg",
	"Jorbagh",
	"Dilli Haat INA",
	"AIIMS",
	"Green Park",
	"Hauz Khas",
	"Malviya Nagar",
	"Saket",
	"Qutab Minar",
	"Chhattarpur",
	"Sultanpur",
	"Ghitorni",
	"Arjan Garh",
	"Guru Dronacharya",
	"Sikandarpur",
	"MG Road",
	"IFFCO Chowk",
	"Huda City Centre"]

	const yellowConnections = [["YELLOW Azadpur", "PINK Azadpur"],
	["YELLOW Kashmere Gate", "VIOLET Kashmere Gate"],
	["YELLOW New Delhi", "AIRPORT New Delhi-Airport Express"],
	["YELLOW Rajiv Chowk", "BLUE Rajiv Chowk"],
	["YELLOW Central Secretariat", "VIOLET Central Secretariat"],
	["YELLOW Dilli Haat INA", "PINK Dilli Haat INA"],
	["YELLOW Hauz Khas", "MAGENTA Hauz Khas"],
	["YELLOW Sikandarpur", "RAPID Sikandarpur (Rapid Metro)"]]

	const blueStations = ["Dwarka Sector 21",
	"Dwarka Sector 8",
	"Dwarka Sector 9",
	"Dwarka Sector 10",
	"Dwarka Sector 11",
	"Dwarka Sector 12",
	"Dwarka Sector 13",
	"Dwarka Sector 14",
	"Dwarka",
	"Dwarka Mor",
	"Nawada",
	"Uttam Nagar West",
	"Uttam Nagar East",
	"Janak Puri West",
	"Janak Puri East",
	"Tilak Nagar",
	"Subhash Nagar",
	"Tagore Garden",
	"Rajouri Garden",
	"Ramesh Nagar",
	"Moti Nagar",
	"Kirti Nagar",
	"Shadipur",
	"Patel Nagar",
	"Rajendra Place",
	"Karol Bagh",
	"Jhandewalan",
	"R K Ashram Marg",
	"Rajiv Chowk",
	"Barakhamba",
	"Mandi House",
	"Supreme Court (Pragati Maidan)",
	"Indraprastha",
	"Yamuna Bank",
	"Akshardham",
	"Mayur Vihar Phase-1",
	"Mayur Vihar Extention",
	"New Ashok Nagar",
	"Noida Sector 15",
	"Noida Sector 16",
	"Noida Sector 18",
	"Botanical Garden",
	"Golf Course",
	"Noida City Center",
	"Noida Sector 34",
	"Noida Sector 52",
	"Noida Sector 61",
	"Noida Sector 59",
	" Noida Sector 62",
	"Noida Electronic City"]

	const blueConnections = [["BLUE Dwarka Sector 21", "AIRPORT Dwarka Sector 21"],
	["BLUE Dwarka", "GRAY Dwarka"],
	["BLUE Janak Puri West", "MAGENTA Janak Puri West"],
	["BLUE Rajouri Garden", "PINK Rajouri Garden"],
	["BLUE Kirti Nagar", "GREEN2 Kirti Nagar"],
	["BLUE Rajiv Chowk", "YELLOW Rajiv Chowk"],
	["BLUE Mandi House", "VIOLET Mandi House"],
	["BLUE Mayur Vihar Phase-1", "PINK Mayur Vihar Phase-1"],
	["BLUE Botanical Garden", "MAGENTA Botanical Garden"],
	["BLUE Noida Sector 52", "AQUA Noida Sector 51"]]

	const airportExpressStations = ["New Delhi-Airport Express",
	"Shivaji Stadium",
	"Dhaula Kuan",
	"Delhi Aerocity",
	"IGI Airport",
	"Dwarka Sector 21"]

	const airportExpressConnections = [["AIRPORT New Delhi-Airport Express", "YELLOW New Delhi"],
	["AIRPORT Dhaula Kuan", "PINK Durgabai Deshmukh South Campus"],
	["AIRPORT Dwarka Sector 21", "BLUE Dwarka Sector 21"]]

	const greenStations = ["Inderlok",
	"Ashok Park Main",
	"Punjabi Bagh",
	"Shivaji Park",
	"Madipur",
	"Paschim Vihar (East)",
	"Paschim Vihar (West)",
	"Peera Garhi",
	"Udyog Nagar",
	"Maharaja Surajmal Stadium",
	"Nangloi",
	"Nangloi Railway Station",
	"Rajdhani Park",
	"Mundka",
	"Mundka Industrial Area (MIA)",
	"Ghevra Metro station",
	"Tikri Kalan",
	"Tikri Border",
	"Pandit Shree Ram Sharma",
	"Bahdurgarh City",
	"Brigadier Hoshiar Singh"]

	const greenConnections = [["GREEN Inderlok", "RED Inderlok"]]

	const rapidStations = ["Sector 55-66 (Rapid Metro)",
	"Sector 54 Chowk (Rapid Metro)",
	"Sector 53-54 (Rapid Metro)",
	"Sector 42-43 (Rapid Metro)",
	"DLF Phase 1 (Rapid Metro)",
	"Sikandarpur (Rapid Metro)",
	"DLF Phase 2 (Rapid Metro)",
	"Belvedere Towers (Rapid Metro)",
	"Cyber City (Rapid Metro)",
	"Moulsari Avenue (Rapid Metro)",
	"DLF Phase 3 (Rapid Metro)"]

	const rapidConnections = [["RAPID Sikandarpur (Rapid Metro)", 'YELLOW Sikandarpur']]

	const violetStations = ["Kashmere Gate",
	"Lal Quila",	
	"Jama Masjid",
	"Delhi Gate",
	"ITO",
	"Mandi House",
	"Janpath",
	"Central Secretariat",
	"Khan Market",
	"Jawaharlal Nehru Stadium",
	"Jangpura",
	"Lajpat Nagar",
	"Moolchand",
	"Kailash Colony",
	"Nehru Place",
	"Kalkaji Mandir",
	"Govind Puri",
	"Okhla",
	"Jasola",
	"Sarita Vihar",
	"Mohan Estate",
	"Tughlakabad",
	"Badarpur Border",
	"Sarai",
	"N.H.P.C. Chowk",
	"Mewala Maharajpur",
	"Sector 28 Faridabad",
	"Badkal Mor",
	"Old Faridabad",
	"Neelam Chowk Ajronda",
	"Bata Chowk",
	"Escorts Mujesar",
	"Sant Surdas - Sihi",
	"Raja Nahar Singh"]

	const violetConnections = [["VIOLET Kashmere Gate", "YELLOW Kashmere Gate"],
	["VIOLET Mandi House", "BLUE Mandi House"],
	["VIOLET Central Secretariat", "YELLOW Central Secretariat"],
	["VIOLET Lajpat Nagar", "PINK Lajpat Nagar"],
	["VIOLET Kalkaji Mandir", "MAGENTA Kalkaji Mandir"]]

	const magentaStations = ["Janak Puri West",
	"Dabri Mor - Janakpuri South",
	"Dashrath Puri",
	"Palam",
	"Sadar Bazaar Cantonment",
	"Terminal 1 IGI Airport",
	"Shankar Vihar",
	"Vasant Vihar",
	"Munirka",
	"RK Puram",
	"IIT Delhi",
	"Hauz Khas",
	"Panchsheel Park",
	"Chirag Delhi",
	"Greater Kailash",
	"Nehru Enclave",
	"Kalkaji Mandir",
	"Okhla NSIC",
	"Sukhdev Vihar",
	"JAMIA MILLIA ISLAMIA",
	"Okhla Vihar",
	"Jasola Vihar Shaheen Bagh",
	"Kalindi Kunj",
	"Okhla Bird Sanctuary",
	"Botanical Garden"]

	const magentaConnections = [["MAGENTA Janak Puri West",  "BLUE Janak Puri West"],
	["MAGENTA Hauz Khas",  "YELLOW Hauz Khas"],
	["MAGENTA Kalkaji Mandir",  "VIOLET Kalkaji Mandir"],
	["MAGENTA Botanical Garden",  "BLUE Botanical Garden"]]

	const pinkStations = [
	"Majlis Park",
	"Azadpur",
	"Shalimar Bagh",
	"Netaji Subash Place",
	"Shakurpur",
	"Punjabi Bagh West",
	"ESI BASAI DARAPUR",
	"Rajouri Garden",
	"Maya Puri",
	"Naraina Vihar",
	"Delhi Cantt",
	"Durgabai Deshmukh South Campus",
	"Sir Vishweshwaraiah Moti Bagh",
	"Bhikaji Cama Place",
	"Sarojini Nagar",
	"Dilli Haat INA",
	"South Extension",
	"Lajpat Nagar",
	"Vinobapuri",
	"Ashram",
	"Sarai Kale Khan Hazrat Nizamuddin",
	"Mayur Vihar Phase-1",
	"Mayur Vihar Pocket I",
	"Trilokpuri Sanjay Lake",
	"Vinod Nagar East",
	"Mandawali - West Vinod Nagar",
	"IP Extension",
	"Anand Vihar",
	"Karkar Duma",
	"Karkarduma Court",
	"Krishna Nagar",
	"East Azad Nagar",
	"Welcome",
	"Jaffrabad",
	"Maujpur",
	"Gokulpuri",
	"Johri Enclave",
	"Shiv Vihar"
	]

	const pinkConnections = [
	["PINK Azadpur", "YELLOW Azadpur"],
	["PINK Netaji Subash Place", "RED Netaji Subash Place"],
	["PINK Rajouri Garden", "BLUE Rajouri Garden"],
	["PINK Durgabai Deshmukh South Campus", "AIRPORT Dhaula Kuan"],
	["PINK Dilli Haat INA", "YELLOW Dilli Haat INA"],
	["PINK Lajpat Nagar", "VIOLET Lajpat Nagar"],
	["PINK Mayur Vihar Phase-1", "BLUE Mayur Vihar Phase-1"],
	["PINK Anand Vihar", "BLUE2 Anand Vihar"],
	["PINK Karkar Duma", "BLUE2 Karkar Duma"],
	["PINK Welcome", "RED Welcome"]]

	const blue2Stations = ["Yamuna Bank",
	"Laxmi Nagar",
	"Nirman Vihar",
	"Preet Vihar",
	"Karkar Duma",
	"Anand Vihar",
	"Kaushambi",
	"Vaishali"]

	const blue2Connections = [["BLUE2 Karkar Duma", "PINK Karkar Duma"],
	["BLUE2 Anand Vihar", "PINK Anand Vihar"]]

	const green2Stations = ["Ashok Park Main",
	"Satguru Ram Singh Marg",
	"Kirti Nagar"]

	const green2Connections = [["GREEN2 Kirti Nagar", "BLUE Kirti Nagar"]]

	const aquaStations = ["Noida Sector 51",
	"Noida Sector 50",
	"Noida Sector 76",
	"Noida Sector 101",
	"Noida Sector 81",
	"NSEZ Noida",
	"Noida Sector 83",
	"Noida Sector 137",
	"Noida Sector 142",
	"Noida Sector 143",
	"Noida Sector 144",
	"Noida Sector 145",
	"Noida Sector 146",
	"Noida Sector 147",
	"Noida Sector 148",
	"Knowledge Park II",
	"Pari Chowk Greater Noida",
	"Alpha 1 Greater Noida",
	"Delta 1 Greater Noida",
	"GNIDA Office",
	"Depot Greater Noida"]

	const aquaConnections = [["AQUA Noida Sector 51", "BLUE Noida Sector 52"]]

	const grayStations = ["Dwarka",
	"Nangli",
	"Najafgarh"]

	const grayConnections = [["GRAY Dwarka", "BLUE Dwarka"]]

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
	const allStationsSet = new Set(allStationsList)
	

// ADDING ALL STATIONS TO ADJ-LIST
	// ADD RED LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < redLength; i++) {
			currentStation = `RED ${redStations[i]}`
			if (i == 0){
				nextStation = `RED ${redStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == redLength-1) {
				previousStatio = `RED ${redStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `RED ${redStations[i+1]}`
				previousStatio = `RED ${redStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of redConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD YELLOW LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < yellowLength; i++) {
			currentStation = `YELLOW ${yellowStations[i]}`
			if (i == 0){
				nextStation = `YELLOW ${yellowStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == yellowLength-1) {
				previousStatio = `YELLOW ${yellowStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `YELLOW ${yellowStations[i+1]}`
				previousStatio = `YELLOW ${yellowStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of yellowConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD BLUE LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < blueLength; i++) {
			currentStation = `BLUE ${blueStations[i]}`
			if (i == 0){
				nextStation = `BLUE ${blueStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == blueLength-1) {
				previousStatio = `BLUE ${blueStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `BLUE ${blueStations[i+1]}`
				previousStatio = `BLUE ${blueStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of blueConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD AIRPORT LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < airportExpressLength; i++) {
			currentStation = `AIRPORT ${airportExpressStations[i]}`
			if (i == 0){
				nextStation = `AIRPORT ${airportExpressStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == airportExpressLength-1) {
				previousStatio = `AIRPORT ${airportExpressStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `AIRPORT ${airportExpressStations[i+1]}`
				previousStatio = `AIRPORT ${airportExpressStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of airportExpressConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD GREEN LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < greenLength; i++) {
			currentStation = `GREEN ${greenStations[i]}`
			if (i == 0){
				nextStation = `GREEN ${greenStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == greenLength-1) {
				previousStatio = `GREEN ${greenStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `GREEN ${greenStations[i+1]}`
				previousStatio = `GREEN ${greenStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of greenConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD RAPID LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < rapidLength; i++) {
			currentStation = `RAPID ${rapidStations[i]}`
			if (i == 0){
				nextStation = `RAPID ${rapidStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == rapidLength-1) {
				previousStatio = `RAPID ${rapidStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `RAPID ${rapidStations[i+1]}`
				previousStatio = `RAPID ${rapidStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of rapidConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD VIOLET LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < violetLength; i++) {
			currentStation = `VIOLET ${violetStations[i]}`
			if (i == 0){
				nextStation = `VIOLET ${violetStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == violetLength-1) {
				previousStatio = `VIOLET ${violetStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `VIOLET ${violetStations[i+1]}`
				previousStatio = `VIOLET ${violetStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of violetConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD MAGENTA LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < magentaLength; i++) {
			currentStation = `MAGENTA ${magentaStations[i]}`
			if (i == 0){
				nextStation = `MAGENTA ${magentaStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == magentaLength-1) {
				previousStatio = `MAGENTA ${magentaStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `MAGENTA ${magentaStations[i+1]}`
				previousStatio = `MAGENTA ${magentaStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of magentaConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD PINK LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < pinkLength; i++) {
			currentStation = `PINK ${pinkStations[i]}`
			if (i == 0){
				nextStation = `PINK ${pinkStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == pinkLength-1) {
				previousStatio = `PINK ${pinkStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `PINK ${pinkStations[i+1]}`
				previousStatio = `PINK ${pinkStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of pinkConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}



	// ADD BLUE2 LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < blue2Length; i++) {
			currentStation = `BLUE2 ${blue2Stations[i]}`
			if (i == 0){
				nextStation = `BLUE2 ${blue2Stations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == blue2Length-1) {
				previousStatio = `BLUE2 ${blue2Stations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `BLUE2 ${blue2Stations[i+1]}`
				previousStatio = `BLUE2 ${blue2Stations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of blue2Connections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD GREEN2 LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < green2Length; i++) {
			currentStation = `GREEN2 ${green2Stations[i]}`
			if (i == 0){
				nextStation = `GREEN2 ${green2Stations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == green2Length-1) {
				previousStatio = `GREEN2 ${green2Stations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `GREEN2 ${green2Stations[i+1]}`
				previousStatio = `GREEN2 ${green2Stations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of green2Connections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD AQUA LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < aquaLength; i++) {
			currentStation = `AQUA ${aquaStations[i]}`
			if (i == 0){
				nextStation = `AQUA ${aquaStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == aquaLength-1) {
				previousStatio = `AQUA ${aquaStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `AQUA ${aquaStations[i+1]}`
				previousStatio = `AQUA ${aquaStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of aquaConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}

	// ADD GRAY LINE STATIONS TO ADJ-LIST
		for (let i = 0; i < grayLength; i++) {
			currentStation = `GRAY ${grayStations[i]}`
			if (i == 0){
				nextStation = `GRAY ${grayStations[i+1]}`
				adj.set(currentStation, [i, nextStation])
			} else if (i == grayLength-1) {
				previousStatio = `GRAY ${grayStations[i-1]}`
				adj.set(currentStation, [i, previousStatio])
			} else {
				nextStation = `GRAY ${grayStations[i+1]}`
				previousStatio = `GRAY ${grayStations[i-1]}`
				adj.set(currentStation, [i, previousStatio, nextStation])
			}
		}
		for (connection of grayConnections) {
			adj.set(connection[0], [...adj.get(connection[0]), connection[1]])
		}
		
//LENGTH LOGS
	// console.log(redLength, yellowLength, blueLength, airportExpressLength, greenLength, rapidLength, violetLength, magentaLength, pinkLength, blue2Length, green2Length, aquaLength, grayLength)
	// console.log(redLength + yellowLength + blueLength + airportExpressLength + greenLength + rapidLength + violetLength + magentaLength + pinkLength + blue2Length + green2Length + aquaLength + grayLength)


//PATHFINDING
count = 0

	const pathfindingHolder =  (start, end) => {

		const stationsBefore = new Set()
		const stationsAfter = new Set()

		stationsBefore.add(start)
		stationsAfter.add(start)

		const startNumber = adj.get(start)[adj.get(start).length - 1]
		const endNumber = adj.get(end)[adj.get(end).length - 1]

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
			var stationBeingAddedToQ = ""

			const visited = new Set()
			const relationMap = new Map()

			while (queue.length > 0) {

				const station = queue.shift()				

				const destinations = adj.get(station).slice(1, adj.get(station).length)

				for (destination of destinations) {

					if (!relationMap.has(destination)){
						relationMap.set(destination, station)
					}
					count += 1
					const destinationNumber = adj.get(destination)[0]


					if (destination === end) {
						// console.log("DESTINATION FOUND")
						found = true
						return backtrack(start, end, relationMap);
						break
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


		const depthFirstPathfinding = (start, end, visited = new Set()) => {

			visited.add(start)

			const destinations = adj.get(start).slice(1, adj.get(start).length)
			const startNumber = adj.get(start)[adj.get(start).length - 1]

			for (const destination of destinations) {
				count+=1

				// console.log(`${destination}:   ${adj.get(destination)[adj.get(destination).length - 1]}`)

				const destinationNumber = adj.get(destination)[adj.get(destination).length - 1]

				if (destination === end) {
					return;
				}

				if (!visited.has(destination)) {
					if (destinationNumber < startNumber) {
						stationsBefore.add(destination)
					} else {
						stationsAfter.add(destination)
					}
					depthFirstPathfinding(destination, end, visited)
				}
			}
		}

		//const route =  depthFirstPathfinding(start, end)
		const route = breathFirstPathfinding(start, end)

		return route;
		// stationsBefore.add(end)
		// stationsAfter.add(end)
	}

const path = pathfindingHolder("BLUE Noida Sector 52", "AIRPORT IGI Airport")
console.log(path)

