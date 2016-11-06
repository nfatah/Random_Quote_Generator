$(document).ready(function() {
  //generate random Color HEX
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }
  ///var quoteDiv = document.getElement('quote');
  // $("#tw").attr("data-text", quoteDiv.innerHTM )
  // };
  $('.btn').click(function() {
    var ranCo = getRandomColor();
    $('body,.btn').css('background-color', ranCo);
    $('#quote').css('color', ranCo);
    $.getJSON("http://api.icndb.com/jokes/random", function(json) {
      document.getElementById("quote").innerHTML = json.value.joke;
    });
  });
});