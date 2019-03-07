var pigLatin = function(input1) {
  var array = input1.toLowerCase().split('');
  if ("aeiou".includes(array[0])) {
    array.push("way");
    return array.join("");
  } else if ("q".includes(array[0]) && "u".includes(array[1])) {
      array[array.length] = array[0];
      array[array.length + 1] = array[1];
      array.shift();
      array.shift();
      array.push("ay");
      return array.join("");
  } else {


      for (index = 0; index <= array.length; index++) {
        if (array[0] !== "i" && array[0] !== "e" && array[0] !== "a" && array[0] !== "o" && array[0] !== "u") {
          array[array.length] = array[0];
          array.shift();
        } else {
            array.push("ay");
            return array.join("");
        }


      };
        //
        // array.shift();
        // return array.join("");

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
