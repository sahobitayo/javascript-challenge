// Get data from data.js
var tableData = data;
// Input HTML tag
var filterBtn = d3.select('#filter-btn');
var tbody= d3.select("tbody");

//Pull in table of data to html
function populateTable(data) {
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
} 
// Populate Table
populateTable(tableData);
// Filter by attribute

filterBtn.on("click", function() {
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredDate = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredDate);
   // Add filtered sighting to table
   tbody.html("");

  populateTable(filteredDate);

  });