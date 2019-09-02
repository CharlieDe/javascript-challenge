// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((AlienReport) => {
    var row = tbody.append("tr");
    Object.entries(AlienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  // Search through date/time
  var button = d3.select("#filter-btn");

  button.on("click", function(){
      var inputDate = d3.select(".form-control");
      var inputValue = inputDate.property("value");
      console.log (inputValue);
      var filterTable = tableData.filter(alien => alien.datetime === inputValue);
      console.log(filterTable);

  });

