var initial1 = 'C';
var initial2 = 'D';
var rowSkip = 0;
var currentColumn;
var dotHTML = '<div class="column">'
  + '<div class="dot"><div class="initial"></div></div><div class="line6 line-h lineaction"></div><div class="line1 line-v lineaction"></div>'
  + '<div class="dot"><div class="initial"></div></div><div class="line7 line-h lineaction"></div><div class="line2 line-v lineaction"></div>'
  + '<div class="dot"><div class="initial"></div></div><div class="line8 line-h lineaction"></div><div class="line3 line-v lineaction"></div>'
  + '<div class="dot"><div class="initial"></div></div><div class="line9 line-h lineaction"></div><div class="line4 line-v lineaction"></div>'
  + '<div class="dot"><div class="initial"></div></div><div class="line10 line-h lineaction"></div><div class="line5 line-v lineaction"></div>'
  +'</div>';

var zoom = false;

function getColor(playerCount) {
  var colorToSet = 'red';
  if(playerCount === 1) {
    colorToSet = 'red';
  } else if (playerCount === 2) {
    colorToSet = 'blue';
  } else if (playerCount > 2) {
    colorToSet = 'red';
    playerCount = 0;
  }
  return colorToSet;
}

function getInitial(playerCount) {

  if (playerCount < 2) {
    return initial1;
  }
  else return initial2;

}

function getPlayerNumber(playerCount) {
  playerCount++
  if (playerCount > 2) {
    playerCount = 1;
  }
  return playerCount;
}

function nextCol() {

  currentColumn = currentColumn.next();

}

function setLine(n, index) {

  var line = currentColumn.find('.line' + n);

  line.css({"background-color": "black", "opacity": "1"});
  line.off();

}

function setColumn(nList) {

  nList.forEach(setLine);
  nextCol();
}

function drawKey(press) {

  switch(press) {
    // A
    case 65:
      setColumn([3, 4, 8]);
      setColumn([1, 2, 6, 8]);
      setColumn([1, 2, 8]);
      setColumn([3, 4]);
      nextCol();
      break;
    // B
    case 66:
      setColumn([1, 2, 3, 4, 6, 8, 10]);
      setColumn([6, 8, 9, 10]);
      setColumn([1, 2, 8, 10]);
      setColumn([3, 4]);
      nextCol();
      break;
    // C
    case 67:
      setColumn([ 2, 3, 7, 9]);
      setColumn([1, 2, 3, 4, 6, 7, 9, 10]);
      setColumn([6, 7, 9, 10]);
      setColumn([1, 4]);
      nextCol();
      break;
    // D
    case 68:
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([2, 3, 6, 7, 9, 10]);
      setColumn([1, 2, 3, 4, 7, 9]);
      setColumn([2, 3]);
      nextCol();
      break;
    // E
    case 69:
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([2, 3, 6, 7, 8, 9, 10]);
      setColumn([6, 7, 8, 9, 10]);
      setColumn([1, 4]);
      nextCol();
      break;
    // F
    case 70:
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([2, 3, 4, 6, 7, 8]);
      setColumn([6, 7, 8]);
      setColumn([1]);
      nextCol();
      break;
    // G
    case 71:
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([3, 6, 8, 9,10]);
      setColumn([3, 4]);
      nextCol();
      break;
    
    // H
    case 72:
      setColumn([1, 2, 3, 4, 7, 8]);
      setColumn([7, 8]);
      setColumn([7, 8]);
      setColumn([1, 2, 3, 4]);
      nextCol();
      break;
    // I
    case 73:
      setColumn([6, 10]);
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([1, 2, 3, 4, 6, 10]);
      nextCol();
      break;
    // J
    case 74:
      
      setColumn([4, 6, 9, 10]);
      setColumn([4, 6, 10]);
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([1, 2, 3, 4]);
      nextCol();
      break;
    // K
    
      case 75:
      setColumn([1, 2, 3, 4, 8]);
      setColumn([1, 2, 6, 8]);
      setColumn([1, 2, 3, 4, 8, 10]);
      setColumn([3, 4]);
      nextCol();
      break;


    // L
    case 76:
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([1, 2, 3, 4, 10]);
      setColumn([10]);
      setColumn([4]);
      nextCol();
      break;
    // M
    case 77:
      setColumn([3, 4, 8, 10]);
      setColumn([1, 2, 4, 6, 9]);
      setColumn([1, 4, 7, 10]);
      setColumn([1, 4, 6, 9]);
      setColumn([1, 2, 4, 8, 10]);
      setColumn([3, 4]);
      nextCol();
      break;
    // N
    case 78:
      setColumn([1, 2, 3, 4, 7, 10]);
      setColumn([2, 3, 4, 7]);
      setColumn([2, 3, 4, 7, 10]);
      setColumn([2, 3, 4]);
      nextCol();
      break;
    // O
    case 79:
      setColumn([2, 3, 7, 9]);
      setColumn([1, 2, 3, 4, 6, 7, 9, 10]);
      setColumn([1, 2, 3, 4, 7, 9]);
      setColumn([2, 3]);
      nextCol();
      break;
    // P
    case 80:
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([2, 3, 4, 6, 7, 8]);
      setColumn([2, 6, 8]);
      setColumn([1, 2]);
      nextCol();
      break;
    // Q
    case 81:
      setColumn([1, 2, 3, 6, 9]);
      setColumn([2, 6, 7, 8, 9]);
      setColumn([1, 2, 3, 4, 9, 10]);
      setColumn([4]);
      nextCol();
      break;
    // R
    case 82:
      setColumn([1, 2, 3, 4, 6, 8]);
      setColumn([6, 7, 8]);
      setColumn([3, 4, 6, 8]);
      setColumn([1, 2]);
      nextCol();
      break;
    // S
    case 83:
      setColumn([1, 2, 4, 6, 8, 9, 10]);
      setColumn([6, 8, 9, 10]);
      setColumn([6, 8, 9, 10]);
      setColumn([3, 4]);
      nextCol();
      break;
    // T
    case 84:
      setColumn([1, 6]);
      setColumn([1, 2, 3, 4, 6, 10]);
      setColumn([1, 2, 3, 4, 6]);
      setColumn([1]);
      nextCol();
      break;
    // U
    case 85:
      setColumn([1, 2, 3, 4, 9, 10]);
      setColumn([9, 10]);
      setColumn([9, 10]);
      setColumn([1, 2, 3, 4]);
      nextCol();
      break;
    // V
    case 86:
      setColumn([1, 2, 8]);
      setColumn([3, 9]);
      setColumn([4, 9, 10]);
      setColumn([1, 2, 3, 4]);
      nextCol();
      break;
    // W
    case 87:
      setColumn([1, 2, 3, 6, 9]);
      setColumn([1, 2, 4, 8, 10]);
      setColumn([1, 2, 4, 6, 9]);
      setColumn([1, 2, 4, 8, 10]);
      setColumn([1, 2, 4, 6, 9]);
      setColumn([1, 2, 3]);
      nextCol();
      break;
    // X
    case 88:
      setColumn([1, 4, 6, 7, 9, 10]);
      setColumn([1, 2, 3, 4, 7, 9]);
      setColumn([1, 2, 3, 4, 6, 7, 9, 10]);
      setColumn([1, 4]);
      nextCol();
      break;
    // Y
      
      case 89:
        setColumn([1,2, 6, 8, 10]);
        setColumn([1, 2, 8, 10]);
        setColumn([1, 2, 3, 4, 6, 10]);
        setColumn([1, 2, 3, 4]);
        nextCol();
        break;

    // Z
    case 90:
      setColumn([3, 4, 6, 8, 9, 10]);
      setColumn([6, 8, 9, 10]);
      setColumn([6, 8, 9, 10]);
      setColumn([1, 2, 4]);
      nextCol();
      break;
    // Spacebar
    case 32:
      nextCol();
      nextCol();
      break;
    // Backspace
    case 8:
      var temp = currentColumn.prev();
      if (temp.length != 0) {
        temp.replaceWith(dotHTML);
        currentColumn = currentColumn.prev();
      }
      break;
    // left-arrow
    case 37:
      break;
    //right arrow
    case 39:
      break;
    //right bracket ]
    case 221:
      $('.dot').toggle();
      break;
    //left bracket [
    case 219:
      if (zoom === true) {
        $('.dot-wrapper').css({"transform":"scale(1)"});
        zoom = false;
      }
      else {
        $('.dot-wrapper').css({"transform":"scale(2)"});
        zoom = true;
      }
      break;

    //  enter or return
    case 13:
    alert("rowskip");
      for (var i = 0; i < rowSkip; i++) { nextCol();}
      break;
  }

}

function start() {
  var vsize = $("input[name=vsize]").val();
  var hsize = $("input[name=hsize]").val();
  if (vsize > 50) vsize = 50;
  if (hsize > 50) hsize = 50;
  if (vsize < 1) vsize = 1;
  if (hsize < 1) hsize = 1;
  var rowSkip = hsize*5;
  initial1 = $("input[name=initial1]").val();
  initial2 = $("input[name=initial2]").val();
  var currentInitial = initial1;
  var totalDotNum = vsize*5*hsize;
  var dotWrapper = $('.dot-wrapper');
  var playerCount = 0;


  dotWrapper.width(20+(27*5*hsize)).height(20+(27*5*vsize));

  for(var i = 0; i < totalDotNum; i++) {
    dotWrapper.append(dotHTML);
  }

  currentColumn = $('.column').first();

  $('.initial').css({"color": getColor(playerCount)});

  $('.lineaction').click(function(){
    playerCount = getPlayerNumber(playerCount);
    $(this).css({"background-color": getColor(playerCount),"opacity": "1"});
  });

  $('.lineaction').contextmenu(function(){
    $(this).css({"background-color": "white","opacity": "0"});
  });

  $('.initial').click(function(){
    currentInitial = getInitial(playerCount);
    $(this).text(currentInitial);
    $(this).css({"color": getColor(playerCount)});
    playerCount = getPlayerNumber(playerCount);
  });

  $('.initial').contextmenu(function(){
    $(this).text('');
  });

  $(document).keydown(function(event){
    drawKey(event.which);
  });

  $('.menu').toggle();
  dotWrapper.toggle();


}
