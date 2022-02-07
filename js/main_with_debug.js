//Here we initialize a function that contains the other function so we only need one run command
function initialize(){
		cities(cityPop);
    addColumns(cityPop);
		addEvents();
};
//Create a list of the table variables
var cityPop = [
	{
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];
function cities(cityPop){

    //Create the table element
    var table = document.createElement("table");

    //Create the header row
    var headerRow = document.createElement("tr");

    //Add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //Add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //Assign html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //Add html strings to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }
		//Append the table to the mydiv
    document.querySelector("#mydiv").appendChild(table);
}
//Function to add a new column
function addColumns(cityPop){
		// For rach of the rows
    document.querySelectorAll("tr").forEach(function(row,i){
			// Adds to the the header row
    		if (i === 0){

    		row.insertAdjacentHTML('beforeend', "<th>City Size</th>");
    	} else {
				//Add calculate citySize to each variable
    		var citySize;
				//Small cities
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
				//Medium City
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
				//Large cities
    		} else {
    			citySize = 'Large';
    		};
			//Add to each row the citySize variable
			var rowHtml = "<td>" + citySize + "</td>"
			row.insertAdjacentHTML('beforeend',rowHtml);
    	};
    });
};
//Events function
function addEvents(){
	//A mouseover event
	document.querySelector("table").addEventListener("mouseover", function(){
		//Creates a color variable
		var Color = 'rgb';
		//for loop for random colors when mouseover
		for (var i=0; i<3; i++){
			//Creates a random color
			var randomColor = Math.round(Math.random()*16777215).toString(16);
			//set color to a random color
			Color = randomColor;
			//new random color
			if (i<2){
				Color = "#" + randomColor;
			//new random color
			} else {
				Color = "#" + randomColor;
		};
		//color the table
		document.querySelector("table").style.color = Color;
	};
})
//A function that defines what happens when click happens
	function clickme(){
		alert('Hey, you clicked me!');
	};
	//Event listener for click
	document.querySelector("table").addEventListener("click", clickme);
};
// Load all of this to the html
document.addEventListener('DOMContentLoaded',initialize)
