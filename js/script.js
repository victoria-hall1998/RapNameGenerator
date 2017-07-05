/**
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {
    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist'];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
}

/* need something for initials like A.B. */
Generator.prototype.toInitial = function(name) {
  return name.split('').join('.').toUpperCase()+'.';
};

/* need something for capital name */
Generator.prototype.toCapital = function(name) {
  return name.toUpperCase();
};

/* need something for lower name */
Generator.prototype.toLower = function(name) {
  return name.toLowerCase();
};

/* need something for end of name */
Generator.prototype.toEnd = function(name) {
  var last_name = this.last_names[Math.floor(Math.random() * this.last_names.length)];
  return name + ' ' + last_name;
};

/* need something for beginning of name */
Generator.prototype.toBeginning = function(name) {
  var first_name = this.first_names[Math.floor(Math.random() * this.first_names.length)];
  return first_name + ' ' + name;
};

/* need something for creating the rap name */
Generator.prototype.createName = function(name) {
  var randomSelection = Math.floor(Math.random() * 7);
  switch (randomSelection) {
    case 0:
    return this.toEnd(name);
    break;
    case 1:
    return this.toBeginning(name);
    break;
    case 2:
    return this.toEnd(this.toInitial(name));
    break;
    case 3:
    return this.toBeginning(this.toInitial(name));
    break;
    case 4:
    return this.toEnd(this.toCapital(name));
    break;
    case 5:
    return this.toBeginning(this.toCapital(name));
    break;
    case 6:
    return this.toEnd(this.toLower(name));
    break;
    case 7:
    return this.toBeginning(this.toLower(name));
    break;
  }
}

$(document).ready(function() {
  var engine = new Generator;
  $('#enter').click(function() {
    if ($('#user-input').val() != undefined) {
      $('.error').hide();
      var origin = $('#user-input').val();
      var rapName = engine.createName(origin);
      $('.response').text(rapName).show();
    }
    else {
      $('.error').show();
      $('.response').hide();
    }
  })
});
