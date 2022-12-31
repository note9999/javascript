
 let no = 1;
 const carousel =$('carousel');

 $('.next').on('click',function(){
  if(no<3){
 carousel.css('transform',`translateX(-${no}00vw)`);
  no++;
  }
 });

 
//1번 버튼 js
document.querySelector('.btn1').addEventListener('click',function(){
  document.querySelector('.carousel').style.transform = 'translateX(0)';
  no=1;
 });

//2번 버튼 jQury
 $('.btn2').on('click',function(){
  $('.carousel').css('transform','translateX(-100vw)');
  no=2;
 });

 //3번 버튼
 $('.btn3').on('click',function(){
  $('.carousel').css('transform','translateX(-200vw)');
  no=3;
 });
