
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

 //다음버튼
 let no = 1;
 //이미지박스위치를 알려주는 변수생성

 $('.next').on('click',function(){
  //이미지 박스가 몇번인지 알아야함 박스가 1번이면 1100vw이동 2번이면 -200vw이동
  if(no===1){
  $('.carousel').css('transform','translateX(-100vw)');
  no++;
  }else if(no===2){
  $('.carousel').css('transform','translateX(-200vw)');
  no++;
  }
  no===0;
 });