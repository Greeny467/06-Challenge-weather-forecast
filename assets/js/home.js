var searchBar = document.querySelector("input[name='search']");
var searchButton = document.querySelector("#searchButton");
var cardHolder = document.querySelector("#cardHolder");
var card = document.querySelector(".card");
var historyArray = JSON.parse(localStorage.getItem("history"))

console.log(historyArray)

function searchSubmit(){
    var searchQuery = searchBar.value;
    localStorage.setItem("search", searchQuery);
    location.replace("onSearch.html");

}

searchButton.addEventListener("click", function(){
    if (searchBar.value != ""){
        searchSubmit();
        localStorage.setItem("rightState", "search")
    }
})

for (i = historyArray.length-1; i>-1; i--){
    console.log(i)
    var currentArray = historyArray[i]
    console.log(currentArray)
    var newCard = document.createElement("div")
    newCard.className="card col-2 m-4 align-items-center cityCard"
    console.log(currentArray[1])
    newCard.setAttribute("id", currentArray[1])
    newCard.textContent = currentArray[0] + ", " + currentArray[1]
    newCard.setAttribute("data-name", currentArray[0])


    newCard.addEventListener("click", function(event){
        target = event.target
        
        var cityObject = {
            cityChoice: target.getAttribute("data-name"),
            stateOfCity: target.getAttribute("id")
        }
        
        console.log(cityObject)
        localStorage.setItem("currentCity", JSON.stringify(cityObject))
    

        localStorage.setItem("rightState", "display")

        localStorage.setItem("search", currentArray[0]);

        location.replace("onSearch.html")
        
    })

    cardHolder.appendChild(newCard)
}