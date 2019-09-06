// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


  
  // Search through date/time
  var button = d3.select("#filter-btn");

  button.on("click", function(){
      var inputDate = d3.select(".form-control");
      var inputValue = inputDate.property("value");
      console.log (inputValue);
      var filterTable = tableData.filter(alien => alien.datetime === inputValue);
      console.log(filterTable);
      filterTable.forEach((FilterReport) => {
        var row = tbody.append("tr");
        Object.entries(FilterReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


  });

