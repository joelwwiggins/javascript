//from data.js


//get the data into the model
var tableinfo= data;


// set up the html body to modify
var tbody=d3.select('tbody');

// start building the table
function table1(tableininfo){

//start with no data
tbody.html('')

// loop through the data
tableinfo.forEach((dataRow)=>{

// append rows to the table
    var row=tbody.append("tr");

// loop through each row and add each value
    Object.values(dataRow).forEach((value)=>{
        var cell=row.append("td");
        cell.text(value);
    })
})

};
table1(tableinfo)

var button=d3.select("#filter-btn");
button.on('click', function(){
d3.event.preventDefault();
 var input = d3.select('#datetime').property(value);
 var filteredData = tableinfo.filter(row=> row.datetime ===input);
 table1(filteredData);


 });



