function level1() {
  $('.level3').hide();
  $('.level2').hide();
  $('.level1').show();
}

function level2() {
  $('.level3').hide();
  $('.level2').show();
  $('.level1').hide();
}

function level3() {
  $('.level3').show();
  $('.level2').show();
  $('.level1').hide();
}

$(document).ready(function() {

  var visits = Cookies.get('visits');

  if (typeof visits == 'undefined') {
    Cookies.set('visits', '1', {expires: 7});
    visits = 0;
  }
  else {
    visits = parseInt(visits);
  }

  if (visits > 8) {
    level3();
    visits++;
    Cookies.set('visits', visits.toString(), {expires: 7});
  }
  else if (visits > 4) {
    level2();
    visits++;
    Cookies.set('visits', visits.toString(), {expires: 7});
  }
  else {
    visits++;
    Cookies.set('visits', visits.toString(), {expires: 7});
  }

});
