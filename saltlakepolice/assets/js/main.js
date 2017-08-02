function level1() {
  $('.level3').hide();
  $('.level2').hide();
  $('.level1').show();

  // $(document.body).css({"background-color":"burlywood"});
}

function level2() {
  $('.level2').show();
  $('.level1').hide();

}

function level3() {
  level2();
  $('.level3').show();

  $(document.body).css({"background-image":"-webkit-linear-gradient(burlywood, brown)"});
  $(document.body).css({"background-image":"linear-gradient(burlywood, brown)"});

  document.getElementById("audio").play();

}

function resetVisits() {
  Cookies.set('visits', '1', {expires: 7});
  level3();
}

$(document).ready(function() {

  var visits = Cookies.get('visits');

  if (typeof visits == 'undefined') {
    Cookies.set('visits', '1', {expires: 7});
    visits = 1;
  }
  else {
    visits = parseInt(visits);
  }

  if (visits > 7) {
    level3();
    visits++;
    Cookies.set('visits', visits.toString(), {expires: 7});
  }
  else if (visits > 3) {
    level2();
    visits++;
    Cookies.set('visits', visits.toString(), {expires: 7});
  }
  else {
    level1();
    visits++;
    Cookies.set('visits', visits.toString(), {expires: 7});
  }

  // $(".activelink").text(visits.toString());
});
