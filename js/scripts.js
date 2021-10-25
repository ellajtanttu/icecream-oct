//VERSION THAT MAKES ARRAY WITH A LOOP:

$(document).ready(function() {
  $("#formFlavors").submit(function(event) {
    event.preventDefault();
    const numberArray = [1,2,3,4,5];
    let inputArray=[];
    numberArray.forEach(function(number) {
      inputArray.push($("'#flav" + number + "'").val());
    });

    console.log("inputArray = " + inputArray);

    inputArray.forEach(function(element) {
    // inputArray.push($("input").val());
      $("ul").append("<li>" + element + "</li>");
    });
  });
});

/* VERSION THAT AUTOMATICALLY MAKES ARRAY WITH INPUTS:

$(document).ready(function() {
  $("#formFlavors").submit(function(event) {
    event.preventDefault();

    let inputArray = [$("#flav1").val(),$("#flav2").val(),$("#flav3").val(),$("#flav4").val(),$("#flav5").val()];

    console.log("inputArray = " + inputArray);

    inputArray.forEach(function(element) {
    // inputArray.push($("input").val());
      $("ul").append("<li>" + element + "</li>");
    });
  });
});

*/

