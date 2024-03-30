//TO DO LIST
// - Make headders sticky
// - Generate CSS

//document.onload(document.getElementById("input").focus)
console.log("javascript working");

document.addEventListener('DOMContentLoaded', function() {

  var CLICK_COUNT = 0;

  document.getElementById("input").addEventListener("keyup", generateTable);

  function generateTable () {

    if (CLICK_COUNT > 0) {  // remove table if it already exists
      removeTable();
    };

    CLICK_COUNT++;
    var table = document.createElement("table");
    document.body.appendChild(table);

    var factor = getInput();  // number of rows/cols to generate

    generateRows(factor);

    function generateRows (num) {

      for (var i = 1; i < num + 1; i++) { // create and iterate through n <tr> tags
        var r = document.createElement("tr");
        var row = table.appendChild(r);

        for (var j = 1; j < num + 1; j++) { // create and iterate through n <td> tags
        if (i == 1 || j == 1){
        	var d = document.createElement("th");
        } else {
          var d = document.createElement("td");
          }
          calculateAndPushToCell(d, i, j);
          row.appendChild(d);  // create n <td> inside each <tr>
        }
      }
    }

    function calculateAndPushToCell (cell, row, col) {
      var multiplied = row * col;
      cell.textContent = multiplied;
      //if (row == col){
      	//cell.classlist.add("square");
      //}
    }

    function getInput () {  // read user's input value
      return parseInt(document.getElementById("input").value);
    }

  }

  function removeTable () {
    console.log("removing table...");
    var parent = document.body;
    var child = document.getElementsByTagName("table")[0];
    parent.removeChild(child);
  }

});
