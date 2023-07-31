var searchBar = document.querySelector("input[name='search']");
var searchButton = document.querySelector("#searchButton");
var rightSide = document.querySelector("#right");
var card = document.querySelector(".card");
var historyTab = document.querySelector("#historyTab")

var currentDate = dayjs()

var rightSideState = localStorage.getItem("rightState")



var newYork = [
    "New York",
    "Buffalo",
    "Rochester",
    "Yonkers",
    "Syracuse",
    "Albany",
    "New Rochelle",
    "Mount Vernon",
    "Schenectady",
    "Utica",
    "White Plains",
    "Hempstead",
    "Troy",
    "Niagara Falls",
    "Binghamton",
    "Freeport",
    "Valley Stream"
]

var california = [
    "Los Angeles",
    "San Diego",
    "San Jose",
    "San Francisco",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Oakland",
    "Bakersfield",
    "Anaheim",
    "Santa Ana",
    "Riverside",
    "Stockton",
    "Chula Vista",
    "Irvine",
    "Fremont",
    "San Bernardino",
    "Modesto",
    "Fontana",
    "Oxnard",
    "Moreno Valley",
    "Huntington Beach",
    "Glendale",
    "Santa Clarita",
    "Garden Grove",
    "Oceanside",
    "Rancho Cucamonga",
    "Santa Rosa",
    "Ontario",
    "Lancaster",
    "Elk Grove",
    "Corona",
    "Palmdale",
    "Salinas",
    "Pomona",
    "Hayward",
    "Escondido",
    "Torrance",
    "Sunnyvale",
    "Orange",
    "Fullerton",
    "Pasadena",
    "Thousand Oaks",
    "Visalia",
    "Simi Valley",
    "Concord",
    "Roseville",
    "Victorville",
    "Santa Clara",
    "Vallejo",
    "Berkeley",
    "El Monte",
    "Downey",
    "Costa Mesa",
    "Inglewood",
    "Carlsbad",
    "San Buenaventura (Ventura)",
    "Fairfield",
    "West Covina",
    "Murrieta",
    "Richmond",
    "Norwalk",
    "Antioch",
    "Temecula",
    "Burbank",
    "Daly City",
    "Rialto",
    "Santa Maria",
    "El Cajon",
    "San Mateo",
    "Clovis",
    "Compton",
    "Jurupa Valley",
    "Vista",
    "South Gate",
    "Mission Viejo",
    "Vacaville",
    "Carson",
    "Hesperia",
    "Santa Monica",
    "Westminster",
    "Redding",
    "Santa Barbara",
    "Chico",
    "Newport Beach",
    "San Leandro",
    "San Marcos",
    "Whittier",
    "Hawthorne",
    "Citrus Heights",
    "Tracy",
    "Alhambra",
    "Livermore",
    "Buena Park",
    "Menifee",
    "Hemet",
    "Lakewood",
    "Merced",
    "Chino",
    "Indio",
    "Redwood City",
    "Lake Forest",
    "Napa",
    "Tustin",
    "Bellflower",
    "Mountain View",
    "Chino Hills",
    "Baldwin Park",
    "Alameda",
    "Upland",
    "San Ramon",
    "Folsom",
    "Pleasanton",
    "Union City",
    "Perris",
    "Manteca",
    "Lynwood",
    "Apple Valley",
    "Redlands",
    "Turlock",
    "Milpitas",
    "Redondo Beach",
    "Rancho Cordova",
    "Yorba Linda",
    "Palo Alto",
    "Davis",
    "Camarillo",
    "Walnut Creek",
    "Pittsburg",
    "South San Francisco",
    "Yuba City",
    "San Clemente",
    "Laguna Niguel",
    "Pico Rivera",
    "Montebello",
    "Lodi",
    "Madera",
    "Santa Cruz",
    "La Habra",
    "Encinitas",
    "Monterey Park",
    "Tulare",
    "Cupertino",
    "Gardena",
    "National City",
    "Rocklin",
    "Petaluma",
    "Huntington Park",
    "San Rafael",
    "La Mesa",
    "Arcadia",
    "Fountain Valley",
    "Diamond Bar",
    "Woodland",
    "Santee",
    "Lake Elsinore",
    "Porterville",
    "Paramount",
    "Eastvale",
    "Rosemead",
    "Hanford",
    "Highland",
    "Brentwood",
    "Novato",
    "Colton",
    "Cathedral City",
    "Delano",
    "Yucaipa",
    "Watsonville",
    "Placentia",
    "Glendora",
    "Gilroy",
    "Palm Desert",
    "Cerritos",
    "West Sacramento",
    "Aliso Viejo",
    "Poway",
    "La Mirada",
    "Rancho Santa Margarita",
    "Cypress",
    "Dublin",
    "Covina",
    "Azusa",
    "Palm Springs",
    "San Luis Obispo",
    "Ceres",
    "San Jacinto",
    "Lincoln",
    "Newark",
    "Lompoc",
    "El Centro",
    "Danville",
    "Bell Gardens",
    "Coachella",
    "Rancho Palos Verdes",
    "San Bruno",
    "Rohnert Park",
    "Brea",
    "La Puente",
    "Campbell",
    "San Gabriel",
    "Beaumont",
    "Morgan Hill",
    "Culver City",
    "Calexico",
    "Stanton",
    "La Quinta",
    "Pacifica",
    "Montclair",
    "Oakley",
    "Monrovia",
    "Los Banos",
    "Martinez"
]
var illinois = [
    "Chicago",
    "Aurora",
    "Rockford",
    "Joliet",
    "Naperville",
    "Springfield",
    "Peoria",
    "Elgin",
    "Waukegan",
    "Cicero",
    "Champaign",
    "Bloomington",
    "Arlington Heights",
    "Evanston",
    "Decatur",
    "Schaumburg",
    "Bolingbrook",
    "Palatine",
    "Skokie",
    "Des Plaines",
    "Orland Park",
    "Tinley Park",
    "Oak Lawn",
    "Berwyn",
    "Mount Prospect",
    "Normal",
    "Wheaton",
    "Hoffman Estates",
    "Oak Park",
    "Downers Grove",
    "Elmhurst",
    "Glenview",
    "DeKalb",
    "Lombard",
    "Belleville",
    "Moline",
    "Buffalo Grove",
    "Bartlett",
    "Urbana",
    "Quincy",
    "Crystal Lake",
    "Plainfield",
    "Streamwood",
    "Carol Stream",
    "Romeoville",
    "Rock Island",
    "Hanover Park",
    "Carpentersville",
    "Wheeling",
    "Park Ridge",
    "Addison",
    "Calumet City"
]
var texas = [
    "Houston",
    "San Antonio",
    "Dallas",
    "Austin",
    "Fort Worth",
    "El Paso",
    "Arlington",
    "Corpus Christi",
    "Plano",
    "Laredo",
    "Lubbock",
    "Garland",
    "Irving",
    "Amarillo",
    "Grand Prairie",
    "Brownsville",
    "Pasadena",
    "McKinney",
    "Mesquite",
    "McAllen",
    "Killeen",
    "Frisco",
    "Waco",
    "Carrollton",
    "Denton",
    "Midland",
    "Abilene",
    "Beaumont",
    "Round Rock",
    "Odessa",
    "Wichita Falls",
    "Richardson",
    "Lewisville",
    "Tyler",
    "College Station",
    "Pearland",
    "San Angelo",
    "Allen",
    "League City",
    "Sugar Land",
    "Longview",
    "Edinburg",
    "Mission",
    "Bryan",
    "Baytown",
    "Pharr",
    "Temple",
    "Missouri City",
    "Flower Mound",
    "Harlingen",
    "North Richland Hills",
    "Victoria",
    "Conroe",
    "New Braunfels",
    "Mansfield",
    "Cedar Park",
    "Rowlett",
    "Port Arthur",
    "Euless",
    "Georgetown",
    "Pflugerville",
    "DeSoto",
    "San Marcos",
    "Grapevine",
    "Bedford",
    "Galveston",
    "Cedar Hill",
    "Texas City",
    "Wylie",
    "Haltom City",
    "Keller",
    "Coppell",
    "Rockwall",
    "Huntsville",
    "Duncanville",
    "Sherman",
    "The Colony",
    "Burleson",
    "Hurst",
    "Lancaster",
    "Texarkana",
    "Friendswood",
    "Weslaco"
]

var pennsylvania = [
    "Philadelphia",
    "Pittsburgh",
    "Allentown",
    "Erie",
    "Reading",
    "Scranton",
    "Bethlehem",
    "Lancaster",
    "Harrisburg",
    "Altoona",
    "York",
    "State College",
    "Wilkes-Barre"
]

var arizona= [
    "Phoenix",
    "Tucson",
    "Mesa",
    "Chandler",
    "Glendale",
    "Scottsdale",
    "Gilbert",
    "Tempe",
    "Peoria",
    "Surprise",
    "Yuma",
    "Avondale",
    "Goodyear",
    "Flagstaff",
    "Buckeye",
    "Lake Havasu City",
    "Casa Grande",
    "Sierra Vista",
    "Maricopa",
    "Oro Valley",
    "Prescott",
    "Bullhead City",
    "Prescott Valley",
    "Marana",
    "Apache Junction"
]

var florida= [
    "Jacksonville",
    "Miami",
    "Tampa",
    "Orlando",
    "St. Petersburg",
    "Hialeah",
    "Tallahassee",
    "Fort Lauderdale",
    "Port St. Lucie",
    "Cape Coral",
    "Pembroke Pines",
    "Hollywood",
    "Miramar",
    "Gainesville",
    "Coral Springs",
    "Miami Gardens",
    "Clearwater",
    "Palm Bay",
    "Pompano Beach",
    "West Palm Beach",
    "Lakeland",
    "Davie",
    "Miami Beach",
    "Sunrise",
    "Plantation",
    "Boca Raton",
    "Deltona",
    "Largo",
    "Deerfield Beach",
    "Palm Coast",
    "Melbourne",
    "Boynton Beach",
    "Lauderhill",
    "Weston",
    "Fort Myers",
    "Kissimmee",
    "Homestead",
    "Tamarac",
    "Delray Beach",
    "Daytona Beach",
    "North Miami",
    "Wellington",
    "North Port",
    "Jupiter",
    "Ocala",
    "Port Orange",
    "Margate",
    "Coconut Creek",
    "Sanford",
    "Sarasota",
    "Pensacola",
    "Bradenton",
    "Palm Beach Gardens",
    "Pinellas Park",
    "Coral Gables",
    "Doral",
    "Bonita Springs",
    "Apopka",
    "Titusville",
    "North Miami Beach",
    "Oakland Park",
    "Fort Pierce",
    "North Lauderdale",
    "Cutler Bay",
    "Altamonte Springs",
    "St. Cloud",
    "Greenacres",
    "Ormond Beach",
    "Ocoee",
    "Hallandale Beach",
    "Winter Garden",
    "Aventura"
]
var indiana= [
    "Indianapolis",
    "Fort Wayne",
    "Evansville",
    "South Bend",
    "Carmel",
    "Bloomington",
    "Fishers",
    "Hammond",
    "Gary",
    "Muncie",
    "Lafayette",
    "Terre Haute",
    "Kokomo",
    "Anderson",
    "Noblesville",
    "Greenwood",
    "Elkhart",
    "Mishawaka",
    "Lawrence",
    "Jeffersonville",
    "Columbus",
    "Portage"
]
var ohio= [
    "Columbus",
    "Cleveland",
    "Cincinnati",
    "Toledo",
    "Akron",
    "Dayton",
    "Parma",
    "Canton",
    "Youngstown",
    "Lorain",
    "Hamilton",
    "Springfield",
    "Kettering",
    "Elyria",
    "Lakewood",
    "Cuyahoga Falls",
    "Middletown",
    "Euclid",
    "Newark",
    "Mansfield",
    "Mentor",
    "Beavercreek",
    "Cleveland Heights",
    "Strongsville",
    "Dublin",
    "Fairfield",
    "Findlay",
    "Warren",
    "Lancaster",
    "Lima",
    "Huber Heights",
    "Westerville",
    "Marion",
    "Grove City"
]
var northCarolina= [
    "Charlotte",
    "Raleigh",
    "Greensboro",
    "Durham",
    "Winston-Salem",
    "Fayetteville",
    "Cary",
    "Wilmington",
    "High Point",
    "Greenville",
    "Asheville",
    "Concord",
    "Gastonia",
    "Jacksonville",
    "Chapel Hill",
    "Rocky Mount",
    "Burlington",
    "Wilson",
    "Huntersville",
    "Kannapolis",
    "Apex",
    "Hickory",
    "Goldsboro"
]
var michigan= [
    "Detroit",
    "Grand Rapids",
    "Warren",
    "Sterling Heights",
    "Ann Arbor",
    "Lansing",
    "Flint",
    "Dearborn",
    "Livonia",
    "Westland",
    "Troy",
    "Farmington Hills",
    "Kalamazoo",
    "Wyoming",
    "Southfield",
    "Rochester Hills",
    "Taylor",
    "Pontiac",
    "St. Clair Shores",
    "Royal Oak",
    "Novi",
    "Dearborn Heights",
    "Battle Creek",
    "Saginaw",
    "Kentwood",
    "East Lansing",
    "Roseville",
    "Portage",
    "Midland",
    "Lincoln Park",
    "Muskegon"
]
var tennessee= [
    "Memphis",
    "Nashville-Davidson",
    "Knoxville",
    "Chattanooga",
    "Clarksville",
    "Murfreesboro",
    "Jackson",
    "Franklin",
    "Johnson City",
    "Bartlett",
    "Hendersonville",
    "Kingsport",
    "Collierville",
    "Cleveland",
    "Smyrna",
    "Germantown",
    "Brentwood"
]
var massachusetts= [
    "Boston",
    "Worcester",
    "Springfield",
    "Lowell",
    "Cambridge",
    "New Bedford",
    "Brockton",
    "Quincy",
    "Lynn",
    "Fall River",
    "Newton",
    "Lawrence",
    "Somerville",
    "Waltham",
    "Haverhill",
    "Malden",
    "Medford",
    "Taunton",
    "Chicopee",
    "Weymouth Town",
    "Revere",
    "Peabody",
    "Methuen",
    "Barnstable Town",
    "Pittsfield",
    "Attleboro",
    "Everett",
    "Salem",
    "Westfield",
    "Leominster",
    "Fitchburg",
    "Beverly",
    "Holyoke",
    "Marlborough",
    "Woburn",
    "Chelsea"
]
var washington= [
    "Seattle",
    "Spokane",
    "Tacoma",
    "Vancouver",
    "Bellevue",
    "Kent",
    "Everett",
    "Renton",
    "Yakima",
    "Federal Way",
    "Spokane Valley",
    "Bellingham",
    "Kennewick",
    "Auburn",
    "Pasco",
    "Marysville",
    "Lakewood",
    "Redmond",
    "Shoreline",
    "Richland",
    "Kirkland",
    "Burien",
    "Sammamish",
    "Olympia",
    "Lacey",
    "Edmonds",
    "Bremerton",
    "Puyallup"
]
var colorado= [
    "Denver",
    "Colorado Springs",
    "Aurora",
    "Fort Collins",
    "Lakewood",
    "Thornton",
    "Arvada",
    "Westminster",
    "Pueblo",
    "Centennial",
    "Boulder",
    "Greeley",
    "Longmont",
    "Loveland",
    "Grand Junction",
    "Broomfield",
    "Castle Rock",
    "Commerce City",
    "Parker",
    "Littleton",
    "Northglenn"
]
var districtOfColumbia = [
    "Washington"
]

var maryland= [
    "Baltimore",
    "Frederick",
    "Rockville",
    "Gaithersburg",
    "Bowie",
    "Hagerstown",
    "Annapolis"
]
var kentucky= [
    "Louisville/Jefferson County",
    "Lexington-Fayette",
    "Bowling Green",
    "Owensboro",
    "Covington"
]
var oregon= [
    "Portland",
    "Eugene",
    "Salem",
    "Gresham",
    "Hillsboro",
    "Beaverton",
    "Bend",
    "Medford",
    "Springfield",
    "Corvallis",
    "Albany",
    "Tigard",
    "Lake Oswego",
    "Keizer"
]
var oklahoma= [
    "Oklahoma City",
    "Tulsa",
    "Norman",
    "Broken Arrow",
    "Lawton",
    "Edmond",
    "Moore",
    "Midwest City",
    "Enid",
    "Stillwater",
    "Muskogee"
]
var wisconsin= [
    "Milwaukee",
    "Madison",
    "Green Bay",
    "Kenosha",
    "Racine",
    "Appleton",
    "Waukesha",
    "Eau Claire",
    "Oshkosh",
    "Janesville",
    "West Allis",
    "La Crosse",
    "Sheboygan",
    "Wauwatosa",
    "Fond du Lac",
    "New Berlin",
    "Wausau",
    "Brookfield",
    "Greenfield",
    "Beloit"
]
var nevada= [
    "Las Vegas",
    "Henderson",
    "Reno",
    "North Las Vegas",
    "Sparks",
    "Carson City"
]
var newMexico= [
    "Albuquerque",
    "Las Cruces",
    "Rio Rancho",
    "Santa Fe",
    "Roswell",
    "Farmington",
    "Clovis"
]
var missouri= [
    "Kansas City",
    "St. Louis",
    "Springfield",
    "Independence",
    "Columbia",
    "Lee's Summit",
    "O'Fallon",
    "St. Joseph",
    "St. Charles",
    "St. Peters",
    "Blue Springs",
    "Florissant",
    "Joplin",
    "Chesterfield",
    "Jefferson City",
    "Cape Girardeau"
]
var virginia= [
    "Virginia Beach",
    "Norfolk",
    "Chesapeake",
    "Richmond",
    "Newport News",
    "Alexandria",
    "Hampton",
    "Roanoke",
    "Portsmouth",
    "Suffolk",
    "Lynchburg",
    "Harrisonburg",
    "Leesburg",
    "Charlottesville",
    "Danville",
    "Blacksburg",
    "Manassas"
]
var georgia= [
    "Atlanta",
    "Columbus",
    "Augusta-Richmond County",
    "Savannah",
    "Athens-Clarke County",
    "Sandy Springs",
    "Roswell",
    "Macon",
    "Johns Creek",
    "Albany",
    "Warner Robins",
    "Alpharetta",
    "Marietta",
    "Valdosta",
    "Smyrna",
    "Dunwoody"
]
var nebraska= [
    "Omaha",
    "Lincoln",
    "Bellevue",
    "Grand Island"
]
var minnesota= [
    "Minneapolis",
    "St. Paul",
    "Rochester",
    "Duluth",
    "Bloomington",
    "Brooklyn Park",
    "Plymouth",
    "St. Cloud",
    "Eagan",
    "Woodbury",
    "Maple Grove",
    "Eden Prairie",
    "Coon Rapids",
    "Burnsville",
    "Blaine",
    "Lakeville",
    "Minnetonka",
    "Apple Valley",
    "Edina",
    "St. Louis Park",
    "Mankato",
    "Maplewood",
    "Moorhead",
    "Shakopee"
]
var kansas= [
    "Wichita",
    "Overland Park",
    "Kansas City",
    "Olathe",
    "Topeka",
    "Lawrence",
    "Shawnee",
    "Manhattan",
    "Lenexa",
    "Salina",
    "Hutchinson"
]
var louisiana= [
    "New Orleans",
    "Baton Rouge",
    "Shreveport",
    "Lafayette",
    "Lake Charles",
    "Kenner",
    "Bossier City",
    "Monroe",
    "Alexandria"
]
var hawaii= [
    "Honolulu"
]
var alaska= [
    "Anchorage"
]
var newJersey= [
    "Newark",
    "Jersey City",
    "Paterson",
    "Elizabeth",
    "Clifton",
    "Trenton",
    "Camden",
    "Passaic",
    "Union City",
    "Bayonne",
    "East Orange",
    "Vineland",
    "New Brunswick",
    "Hoboken",
    "Perth Amboy",
    "West New York",
    "Plainfield",
    "Hackensack",
    "Sayreville",
    "Kearny",
    "Linden",
    "Atlantic City"
]
var idaho= [
    "Boise City",
    "Nampa",
    "Meridian",
    "Idaho Falls",
    "Pocatello",
    "Caldwell",
    "Coeur d'Alene",
    "Twin Falls"
]
var alabama= [
    "Birmingham",
    "Montgomery",
    "Mobile",
    "Huntsville",
    "Tuscaloosa",
    "Hoover",
    "Dothan",
    "Auburn",
    "Decatur",
    "Madison",
    "Florence",
    "Gadsden"
]
var iowa= [
    "Des Moines",
    "Cedar Rapids",
    "Davenport",
    "Sioux City",
    "Iowa City",
    "Waterloo",
    "Council Bluffs",
    "Ames",
    "West Des Moines",
    "Dubuque",
    "Ankeny",
    "Urbandale",
    "Cedar Falls"
]
var arkansas= [
    "Little Rock",
    "Fort Smith",
    "Fayetteville",
    "Springdale",
    "Jonesboro",
    "North Little Rock",
    "Conway",
    "Rogers",
    "Pine Bluff",
    "Bentonville"
]
var utah= [
    "Salt Lake City",
    "West Valley City",
    "Provo",
    "West Jordan",
    "Orem",
    "Sandy",
    "Ogden",
    "St. George",
    "Layton",
    "Taylorsville",
    "South Jordan",
    "Lehi",
    "Logan",
    "Murray",
    "Draper",
    "Bountiful",
    "Riverton",
    "Roy",
    "vineyard"
]
var rhodeIsland= [
    "Providence",
    "Warwick",
    "Cranston",
    "Pawtucket",
    "East Providence",
    "Woonsocket"
]
var mississippi= [
    "Jackson",
    "Gulfport",
    "Southaven",
    "Hattiesburg",
    "Biloxi",
    "Meridian"
]
var southDakota= [
    "Sioux Falls",
    "Rapid City"
]
var connecticut= [
    "Bridgeport",
    "New Haven",
    "Stamford",
    "Hartford",
    "Waterbury",
    "Norwalk",
    "Danbury",
    "New Britain",
    "Meriden",
    "Bristol",
    "West Haven",
    "Milford",
    "Middletown",
    "Norwich",
    "Shelton"
]
var southCarolina =[
    "Columbia",
    "Charleston",
    "North Charleston",
    "Mount Pleasant",
    "Rock Hill",
    "Greenville",
    "Summerville",
    "Sumter",
    "Goose Creek",
    "Hilton Head Island",
    "Florence",
    "Spartanburg"
]
var newHampshire= [
    "Manchester",
    "Nashua",
    "Concord"
]
var northDakota= [
    "Fargo",
    "Bismarck",
    "Grand Forks",
    "Minot"
]
var montana= [
    "Billings",
    "Missoula",
    "Great Falls",
    "Bozeman"
]
var delaware= [
    "Wilmington",
    "Dover"
]
var maine= [
    "Portland"
]
var wyoming= [
    "Cheyenne",
    "Casper"
]
var  westVirginia= [
    "Charleston",
    "Huntington"
]
var vermont= [
    "Burlington"
]
var states = [
    alabama,
    california,
    hawaii,
    delaware,
    florida,
    idaho,
    rhodeIsland,
    washington,
    kansas,
    louisiana,
    maine,
    nebraska,
    ohio,
    pennsylvania,
    southCarolina,
    texas,
    utah,
    georgia,
    vermont,
    tennessee,
    colorado,
    alaska,
    arkansas,
    arizona,
    illinois,
    newJersey,
    connecticut,
    indiana,
    newMexico,
    iowa,
    kentucky,
    maryland,
    michigan,
    minnesota,
    montana,
    nevada,
    newHampshire,
    northCarolina,
    northDakota,
    massachusetts,
    oregon,
    oklahoma,
    westVirginia,
    wisconsin,
    virginia,
    southDakota,
    wyoming,
    mississippi,
    missouri,
    newYork
]
var stateNames = [
    "Alabama", "California", "Hawaii", "Delaware", "Florida", "Idaho", "Rhode Island", "Washington", "Kansas", "Louisiana", "Maine", "Nebraska", "Ohio", "Pennsylvania", "South Carolina", "Texas", "Utah", "Georgia", "Vermont", "Tennessee", "Colorado", "Alaska", "Arkansas", "Arizona", "Illinois", "New Jersey", "Connecticut", "Indiana", "New Mexico", "Iowa", "Kentucky", "Maryland", "Michigan", "Minnesota", "Montana", "Nevada", "New Hampshire", "North Carolina", "North Dakota", "Massachusetts", "Oregon", "Oklahoma", "West Virginia", "Wisconsin", "Virginia", "South Dakota", "Wyoming", "Mississippi", "Missouri", "New York"
]

searchBar.value = localStorage.getItem("search")

var cardHolder = document.createElement("div")
cardHolder.setAttribute("id", "cardHolder")


function searchSubmit(){
    var searchQuery = searchBar.value;
    localStorage.setItem("search", searchQuery);

}
function cityButtonPress(cityChoice, stateOfCity, event){
    var target = event.target


    var cityObject = {
        city: cityChoice,
        state: stateOfCity
    }
                
    localStorage.setItem("currentCity", JSON.stringify(cityObject))

    var elementAmount= rightSide.children.length
    if (elementAmount >1){
        cardAmount = cardHolder.children.length
        for(i = 0; i < cardAmount; i++){
            cardHolder.firstChild.remove()
        }
    }
    for(i = 0;i < elementAmount;i++){
        rightSide.firstChild.remove();
    }

    returnCity()
    displayReturn(cityChoice, stateOfCity)

    localStorage.setItem("rightState", "display")

    var cityArray = [cityChoice, stateOfCity]

    var testHistoryArray = localStorage.getItem("history")

    if (testHistoryArray == null || testHistoryArray == ""){
        var historyArray = [cityArray]
        localStorage.setItem("history", JSON.stringify(historyArray))
    }
    var historyArray = JSON.parse(localStorage.getItem("history"))
    
    for(var i = historyArray.length - 1; i >= 0; i--){
        var currentArray = historyArray[i]
        if (currentArray[0] == cityArray[0] && currentArray[1] == cityArray[1]){
            historyArray.splice(i, 1)
        }
        if (historyArray[i] == ""){
            historyArray.splice(i,1)
        }
    }   

    historyArray.push(cityArray)

    if (historyArray.length > 8){
        historyArray.shift()
    }
    console.log(historyArray)
    localStorage.setItem("history", JSON.stringify(historyArray))


    for (i = historyTab.children.length; i>0; i--){
        historyTab.firstChild.remove()
    }
    for (i = historyArray.length -1; i > -1; i--){
        currentArray = historyArray[i]
        console.log("here" + currentArray)
        var historyButton = document.createElement("button")
        historyButton.textContent = historyArray[i]
        historyButton.setAttribute("id", historyArray[i])
        historyButton.setAttribute("data-name", currentArray[0])
        console.log(historyButton.dataset.name + "   !")
        historyButton.setAttribute("data-state", currentArray[1])
        historyTab.appendChild(historyButton)

        currentArray = historyArray[i]

        historyButton.addEventListener("click", function(event1){
            target = event1.target

            ButtoncityChoice = target.dataset.name
            console.log(ButtoncityChoice)
            ButtonstateOfCity = target.dataset.state
            cityButtonPress(ButtoncityChoice, ButtonstateOfCity, event1)
        })
    }

    return [cityChoice, stateOfCity] 
}

function displayReturn(var1, var2){
    var city = var1
    var state;
    if (var2 == "Alabama") {
        state = "AL";
    } else if (var2 == "Alaska") {
        state = "AK";
    } else if (var2 == "Arizona") {
        state = "AZ";
    } else if (var2 == "Arkansas") {
        state = "AR";
    } else if (var2 == "California") {
        state = "CA";
    } else if (var2 == "Colorado") {
        state = "CO";
    } else if (var2 == "Connecticut") {
        state = "CT";
    } else if (var2 == "Delaware") {
        state = "DE";
    } else if (var2 == "Florida") {
        state = "FL";
    } else if (var2 == "Georgia") {
        state = "GA";
    } else if (var2 == "Hawaii") {
        state = "HI";
    } else if (var2 == "Idaho") {
        state = "ID";
    } else if (var2 == "Illinois") {
        state = "IL";
    } else if (var2 == "Indiana") {
        state = "IN";
    } else if (var2 == "Iowa") {
        state = "IA";
    } else if (var2 == "Kansas") {
        state = "KS";
    } else if (var2 == "Kentucky") {
        state = "KY";
    } else if (var2 == "Louisiana") {
        state = "LA";
    } else if (var2 == "Maine") {
        state = "ME";
    } else if (var2 == "Maryland") {
        state = "MD";
    } else if (var2 == "Massachusetts") {
        state = "MA";
    } else if (var2 == "Michigan") {
        state = "MI";
    } else if (var2 == "Minnesota") {
        state = "MN";
    } else if (var2 == "Mississippi") {
        state = "MS";
    } else if (var2 == "Missouri") {
        state = "MO";
    } else if (var2 == "Montana") {
        state = "MT";
    } else if (var2 == "Nebraska") {
        state = "NE";
    } else if (var2 == "Nevada") {
        state = "NV";
    } else if (var2 == "New Hampshire") {
        state = "NH";
    } else if (var2 == "New Jersey") {
        state = "NJ";
    } else if (var2 == "New Mexico") {
        state = "NM";
    } else if (var2 == "New York") {
        state = "NY";
    } else if (var2 == "North Carolina") {
        state = "NC";
    } else if (var2 == "North Dakota") {
        state = "ND";
    } else if (var2 == "Ohio") {
        state = "OH";
    } else if (var2 == "Oklahoma") {
        state = "OK";
    } else if (var2 == "Oregon") {
        state = "OR";
    } else if (var2 == "Pennsylvania") {
        state = "PA";
    } else if (var2 == "Rhode Island") {
        state = "RI";
    } else if (var2 == "South Carolina") {
        state = "SC";
    } else if (var2 == "South Dakota") {
        state = "SD";
    } else if (var2 == "Tennessee") {
        state = "TN";
    } else if (var2 == "Texas") {
        state = "TX";
    } else if (var2 == "Utah") {
        state = "UT";
    } else if (var2 == "Vermont") {
        state = "VT";
    } else if (var2 == "Virginia") {
        state = "VA";
    } else if (var2 == "Washington") {
        state = "WA";
    } else if (var2 == "West Virginia") {
        state = "WV";
    } else if (var2 == "Wisconsin") {
        state = "WI";
    } else if (var2 == "Wyoming") {
        state = "WY";
    } else {
        state = "Unknown";
    }

    var requestURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city +","+ state + ",US&limit=1&appid=5829f688424237daa5983eb7b745d3bb"
    fetch(requestURL)
        .then (function(response) {
            return response.json()
        })
        .then (function(data) {
            var latitude = data[0].lat
            var longitude = data[0].lon
            requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=5829f688424237daa5983eb7b745d3bb&units=imperial"
            fetch(requestURL)
                .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    
                    var iconCode = data.weather[0].icon
                    var iconLink = "https://openweathermap.org/img/w/" + iconCode + ".png"
                    var tempNow = data.main.temp
                    var humidityNow = data.main.humidity
                    var windNow = data.wind.speed

                    var cityNameDisplay = document.createElement("h1")
                    cityNameDisplay.textContent=var1 + ", " +var2
                    rightSide.appendChild(cityNameDisplay)

                    var oneDayData = document.createElement("div")
                    oneDayData.setAttribute("id", "oneDay")
                    rightSide.append(oneDayData)

                    var dayName = document.createElement("h3")
                    dayName.textContent = currentDate.format("dddd, MMM, D, YYYY")
                    oneDayData.appendChild(dayName)

                    var iconNow = document.createElement("img")
                    iconNow.setAttribute("src", iconLink)
                    oneDayData.appendChild(iconNow)

                    var tempText = document.createElement("h3")
                    tempText.textContent="Current Tempurature: " + tempNow + "F"
                    oneDayData.appendChild(tempText)

                    var currentHumidity = document.createElement("h3")
                    currentHumidity.textContent="humidity:" + humidityNow + "%"
                    oneDayData.appendChild(currentHumidity)

                    var currentWind = document.createElement("h3")
                    currentWind.textContent="wind speed:" + windNow + "Mph"
                    oneDayData.appendChild(currentWind)

                })

            requestURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=5829f688424237daa5983eb7b745d3bb&units=imperial"

            fetch(requestURL)
                .then (function(response){
                    return response.json()
                })
                .then(function(data){

                    function createCard(parent, listNum, dateAdd){
                        var cardDate = document.createElement("h3")
                        var dayDate = currentDate.add(dateAdd, "day").format("dddd")
                        cardDate.textContent = dayDate
                        parent.appendChild(cardDate)

                        var cardIcon = document.createElement("img")
                        var dayIcon = data.list[listNum].weather[0].icon
                        var imgLink = "http://openweathermap.org/img/w/" + dayIcon + ".png"
                        cardIcon.setAttribute("src", imgLink)
                        parent.appendChild(cardIcon)

                        var cardTemp = document.createElement("h3")
                        var dayTemp= data.list[listNum].main.temp
                        cardTemp.textContent = dayTemp + " F"
                        parent.appendChild(cardTemp)

                        var cardHumidity = document.createElement("h4")
                        var dayHumidity = data.list[listNum].main.humidity
                        cardHumidity.textContent=dayHumidity + "% Humidity"
                        parent.appendChild(cardHumidity)

                        var cardWind = document.createElement("h4")
                        var dayWind = data.list[listNum].wind.speed
                        cardWind.textContent = dayWind + " Mph winds"
                        parent.appendChild(cardWind)
                    }
                    var fiveDayData = document.createElement("div")
                    fiveDayData.setAttribute("id", "fiveDay")
                    rightSide.append(fiveDayData)

                    var dayOne = document.createElement("section")
                    dayOne.className="littleCard"
                    createCard(dayOne, 4, 1)
                    fiveDayData.appendChild(dayOne)


                    var dayTwo = document.createElement("section")
                    dayTwo.className="littleCard"
                    createCard(dayTwo, 12, 2)
                    fiveDayData.appendChild(dayTwo)

                    var dayThree = document.createElement("section")
                    dayThree.className="littleCard"
                    createCard(dayThree, 20, 3)
                    fiveDayData.appendChild(dayThree)

                    var dayFour = document.createElement("section")
                    dayFour.className="littleCard"
                    createCard(dayFour, 28, 4)
                    fiveDayData.appendChild(dayFour)

                    var dayFive = document.createElement("section")
                    dayFive.className="littleCard"
                    createCard(dayFive, 36, 5)
                    fiveDayData.appendChild(dayFive)
                })
        })



}

function returnCity(){
    var workingObject = JSON.parse(localStorage.getItem("currentCity"))
    cityChoice = workingObject.city
    stateOfCity = workingObject.state

    return[cityChoice, stateOfCity]
}

function searchReturn(){
    var resultText = document.createElement("h2")
    var currentSearch = localStorage.getItem("search")

    var lowerCurrentSearch = currentSearch.toLowerCase()
    resultText.textContent="Results for "+currentSearch;
    rightSide.appendChild(resultText)

    rightSide.appendChild(cardHolder)

    for(i=0; i < states.length;i++){
        var lowerState = states[i].map(word => word.toLowerCase())
        if(lowerState.includes(lowerCurrentSearch)){
            var newCard = document.createElement("div")
            newCard.className="card col-2 m-4 align-items-center cityCard"
            newCard.setAttribute("id", stateNames[i])
            newCard.textContent = currentSearch + ", " + stateNames[i]

            newCard.addEventListener("click", function(event){
                target = event.target
                var cityChoice = currentSearch
                var stateOfCity = target.getAttribute("id")
                cityButtonPress(cityChoice, stateOfCity, event)
            })  

            cardHolder.appendChild(newCard)
        }
    }
}

searchButton.addEventListener("click", function(){

    rightSide.innerHTML = null;

    searchSubmit();
    searchReturn();
})

console.log(rightSideState)

if(rightSideState == "search"){
    searchReturn();
}
else if (rightSideState == "display"){
    currentCity = JSON.parse(localStorage.getItem("currentCity"))

    var cityArray = [currentCity.cityChoice, currentCity.stateOfCity]

    var testHistoryArray = localStorage.getItem("history")
    console.log(testHistoryArray)
    if (testHistoryArray == null || testHistoryArray == ""){
        var historyArray = [cityArray]
        localStorage.setItem("history", JSON.stringify(historyArray))
    }
    var historyArray = JSON.parse(localStorage.getItem("history"))
    
    for(var i = historyArray.length - 1; i >= 0; i--){
        var currentArray = historyArray[i]
        if (currentArray[0] == cityArray[0] && currentArray[1] == cityArray[1]){
            historyArray.splice(i, 1)
            console.log("cut")
        }
        if (historyArray[i] == ""){
            historyArray.splice(i,1)
        }
    }

    historyArray.push(cityArray)

    if (historyArray.length > 8){
        historyArray.shift()
    }
    console.log(historyArray)
    localStorage.setItem("history", JSON.stringify(historyArray))


    for (i = historyTab.children.length; i>0; i--){
        historyTab.firstChild.remove()
    }
    for (i = historyArray.length - 1; i > -1; i--){
        var historyButton = document.createElement("button")
        historyButton.textContent = historyArray[i]
        historyButton.setAttribute("id", historyArray[i])
        historyButton.setAttribute("data-name", currentArray[0])
        historyButton.setAttribute("data-state", currentArray[1])
        historyTab.appendChild(historyButton)

        currentArray = historyArray[i]

        historyButton.addEventListener("click", function(event1){
            target = event1.target

            ButtoncityChoice = target.dataset.name
            console.log(ButtoncityChoice)
            ButtonstateOfCity = target.dataset.state
            console.log(ButtonstateOfCity)

            var elementAmount= rightSide.children.length
            console.log(elementAmount)
            if (elementAmount =1){
                cardAmount = cardHolder.children.length
                for(i = 0; i < cardAmount; i++){
                    cardHolder.firstChild.remove()
                }
            }
            if (elementAmount = 2){
                var data1 = document.querySelector("#oneDay")
                var data2 = document.querySelector("#fiveDay")

                cardAmount1 = data1.children.length
                for(i = 0; i < cardAmount1; i++){
                    data1.firstChild.remove()
                }

                cardAmount2 = data2.children.length
                for(i = 0; i < cardAmount2; i++){
                    data2.firstChild.remove()
                }
            }
            
            for(i = 0;i < elementAmount;i++){
                rightSide.firstChild.remove();
            }

            cityButtonPress(ButtoncityChoice, ButtonstateOfCity, event1)
        })
    }

    displayReturn(currentCity.cityChoice, currentCity.stateOfCity);
}