var pigLatin = function(input1) {
  // input1 = input1.toLowerCase();
  var array = input1.split('');
  if ("AEIOUaeiou".includes(array[0])) {
    array.push("way");
    return array.join("");
  } else {
    return array[1];
  };
};

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
// debugger;
    var input1 = $("input#number").val();
    var result = pigLatin(input1);

    $(".result").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
