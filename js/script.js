function Generator() {
  this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist'];
  this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

  var last_names = this.last_names;
  var first_names = this.first_names;

  this.generate = function(name) {
    rap_name = []
    rap_name.push(first_name(), middle_name(name), last_name());
    shuffled = shuffle(rap_name).join(' ');
    return shuffled
  }

  function last_name() {
    var index = getRandomIndex(last_names);
    return last_names[index];
  }

  function first_name() {
    var index = getRandomIndex(first_names);
    return first_names[index];
  }

  function middle_name(name) {
    var options = [];
    this.original_name = String(name);
    options.push(this.original_name);
    options.push(this.original_name.charAt(0).toUpperCase());
    options.push(this.original_name.toUpperCase().split('').join('.')+'.');
    var index = getRandomIndex(options);
    return options[index]
  }

  function shuffle(array) {
    var currentIndex = array.length, tempVal, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempVal = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }

    return array;
  }

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
}

$(document).ready(function() {
  var engine = new Generator;
  $("#enter").click(function() {
    if ($("#user-input").val() !== "") {
      $(".error").hide();
      var original_name = $("#user-input").val();
      var rap_name = engine.generate(original_name)
      $(".response").text(rap_name).show();
    }
    else {
      $(".error").show();
      $(".response").hide();
    }
  });
});
