// from data.js
var tableData = data;
// Input HTML tag
var filterBtn = d3.select('#filter-btn');
var tbody = d3.select("tbody");

var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var inputField3 = d3.select("#state");
var inputField4 = d3.select("#country");
var inputField5 = d3.select("#shape");
var resetbtn = d3.select("#reset-btn");

//Pull in table of data to html
function populateTable(data) {
  tbody.html(""); // erase previous contents
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
filterBtn.on("click", function () {
  d3.event.preventDefault();
  // Get the value property of the input element
  var inputDate = inputField1.property("value");
  var inputCity = inputField2.property("value");
  var inputState = inputField3.property("value");
  var inputCountry = inputField4.property("value");
  var inputShape = inputField5.property("value");

  var filteredData = tableData;
  //  Create if statements for multiple filters
  if (inputDate != "") {
    var filteredData = filteredData.filter(data => data.datetime === inputDate);
  }
  if (inputCity != "") {
    var filteredData = filteredData.filter(data => data.city === inputCity);
  }
  if (inputState != "") {
    var filteredData = filteredData.filter(data => data.state === inputState);
  }
  if (inputCountry != "") {
    var filteredData = filteredData.filter(data => data.country === inputCountry);
  }
  if (inputShape != "") {
    var filteredData = filteredData.filter(data => data.shape === inputShape);
  }
  console.log(filteredData);
  populateTable(filteredData);
});

// // Another shorter way of doing this
// conditions = {}
// conditions['datetime'] = inputField1.property("value");
// conditions['city'] = inputField2.property("value");
// conditions['state'] = inputField3.property("value");
// conditions['country'] = inputField4.property("value");
// conditions['state'] = inputField5.property("value");

// var filteredData= tableData;
// Object.entries(conditions).forEach(([key, value]) => {
//   if (value != ""){
//    filteredData= filteredData.filter(data => data[key] === value);
//   }
// });
// console.log(filteredData);
// populateTable(filteredData);
// });

// For reset button
resetbtn.on("click", () => {
  tbody.html("");
  populateTable(data);
})




