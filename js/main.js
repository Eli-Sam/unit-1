// Add all scripts to the JS folder
function myFunc(){
    var mydiv = document.getElementById("mydiv");
    mydiv.innerHTML = "Hello World.";
};

//window.onload = myFunc();
/*function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    //Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        //first conditional block
            if (cityPop[i].city == 'Madison'){
                city.innerHTML = 'Badgerville';
            } else if (cityPop[i].city == 'Green Bay'){
                city.innerHTML = 'Packerville';
            } else {
                city.innerHTML = cityPop[i].city;
            }

            tr.appendChild(city);

            var pop = document.createElement("td");
        //second conditional block
            if (cityPop[i].population < 500000){
                pop.innerHTML = cityPop[i].population;
            } else {
                pop.innerHTML = 'Too big!';
            };

            tr.appendChild(pop);

            table.appendChild(tr);
        };


    //add the table to the div in index.html
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend',"Hello World!");
    document.querySelector("#mydiv").appendChild(table);
    //mydiv.appendChild(table);
};
window.onload = initialize();
*/
//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#mydiv").appendChild(table);
    //document.querySelector('#mydiv').style.color = 'red';

    //change the text size and alignment
    //document.querySelector('#mydiv').style.fontSize = '2em';
    //document.querySelector('#mydiv').style.textAlign = 'left';

//get the text color and add it as text to the div
    //var thecolor = document.querySelector('#mydiv').style.color;
    //document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thecolor);
}

document.addEventListener('DOMContentLoaded',initialize)
