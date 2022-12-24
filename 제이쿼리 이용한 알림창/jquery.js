function showHide(id,dp) {
  $(`#${id}`).css('display', dp);
}


let cnt = 0;
  
function onOff() {
  cnt ++;

  if(cnt % 2 == 0) {
  $('.box').css('display', 'none');
  } else {
    $('.box').css('display', 'block');
  }
  
}