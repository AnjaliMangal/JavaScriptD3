// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use D3 to set the table class to `table table-bordered`
table.attr("class", "table table-striped table-bordered");

var tbody = d3.select("tbody");

// Select the submit button
var fiterTable = d3.select("#filter-btn");

fiterTable.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element date from form
  var inputElementDate = d3.select("#datetime");

  // Get the value property of the input element date 
  var inputValueDate = inputElementDate.property("value");

  console.log(inputValueDate);
  console.log(tableData);

  // Select the input element state from form
  var inputElementState = d3.select("#state");

  // Get the value property of the input element date 
  var inputValueState = inputElementState.property("value");
  
  console.log(inputValueState);


  var filteredData =[]
  filteredData = tableData.filter(ufo => ufo.datetime === inputValueDate);
  
  //Adding second form filter as state
  var filteredDataState =[]
  filteredDataState = filteredData.filter(ufo => ufo.state === inputValueState);

  console.log(filteredData);
  console.log(filteredDataState);

  
  
  filteredDataState.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key,value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
          
  });
});
