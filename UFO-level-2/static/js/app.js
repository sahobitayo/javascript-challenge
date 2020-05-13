// from data.js
var tableData = data;
// Input HTML tag
var filterBtn = d3.select('#filter-btn');
var tbody= d3.select("tbody");

var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var inputField3 = d3.select("#state");
var inputField4 = d3.select("#country");
var inputField5 = d3.select("#shape");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape",  "comments"]

//Pull in table of data to html
function populateTable(data) {
    tbody.html("");
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
  // Get the value property of the input element
  var inputDate = inputField1.property("value");
  var inputCity = inputField2.property("value");
  var inputState = inputField3.property("value");
  var inputCountry = inputField4.property("value");
  var inputShape = inputField5.property("value");

  var filteredDate = tableData.filter(data => data.datetime === inputDate);
  console.log(filteredDate);
  var filteredCity = tableData.filter(data=> data.city === inputCity);
  console.log(filteredCity);
  var filteredState = tableData.filter(data=> data.state === inputState);
  console.log(filteredState);
  var filteredCountry = tableData.filter(data => data.country === inputCountry);
  console.log(filteredCountry);
  var filteredShape = tableData.filter(data => data.shape === inputShape);
  console.log(filteredShape);

  var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
  console.log(filterData);

  let response = {
    filterData, filteredDate, filteredCity, filteredState, filteredCountry, filteredShape
  }

  if (response.filterData.length !== 0) {
    populateTable(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filteredCity.length !== 0 || response.filteredDate.length !== 0 || response.filteredState.length !== 0 || response.filteredCountry.length !== 0 || response.filteredShape.length !== 0))){
      populateTable(filteredDate) || populateTable(filteredCity) || populateTable(filteredState) || populateTable(filteredCountry) || populateTable(filteredShape);
    }
})


// var filteredData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
//   console.log(filteredData)

//   // Add filtered sighting to table
// //   tbody.html("");

//   let response = {
//     filteredData, filteredCity, filteredDate
//   }

//   if (response.filteredData.length !== 0) {
//     populateTable(filteredData);
//   }
//     else if (response.filteredData.length === 0 && ((response.filteredCity.length !== 0 || response.filteredDate.length !== 0))){
//       populateTable(filteredCity) || populateTable(filteredDate);
  
//     }
// })

resetbtn.on("click", () => {
    tbody.html("");
    populateTable(data);
  })




