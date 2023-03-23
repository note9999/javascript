let t= 5;

setInterval(function() {
  t--;
  document.querySelector('.time').innerHTML = t;
},1000);

setTimeout(hideBlock, 5000);
W
function hideBlock() {
  document.querySelector('.alert').style.display = 'none';
}