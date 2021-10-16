// from data.js
var tableData = data;
var tbody=d3.select('tbody');

function maketable(report){
    d3.select('tbody').html("");
    report.foreach(function (record){
var row=tbody.append("tr");
Object.entries(record).forEach(function ([key,value]){
    var cell =row.append("td");
    cell.text(value);
});

    });

}
// YOUR CODE HERE!
