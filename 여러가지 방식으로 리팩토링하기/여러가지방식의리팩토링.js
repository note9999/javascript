let fruits = [
  {name : 'apple', memo : '빨개요'},
  {name : 'mango', memo : '달달함'},
  {name : 'melon', memo : '맛있음'},
];

fruits.forEach((data)=> {
let second= `<div class="col">
              <div class="card" style="width: 18rem;">
                <img src="img/${data.name}.jpg" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">${data.memo}</p>
                  <button class="btn btn-primary">담기</button>
                </div>
              </div>
              </div>`;
            
// document.querySelector('.row').insertAdjacentHTML('beforeend',second)
  $('.row').eq(0).append(second);

})


//첫번째 방법 
// let first = document.createElement('div'); 
// first.className = 'col';
// first.innerHTML=`<div class="card" style="width: 18rem;">
//                   <img src="이미지" class="card-img-top">
//                   <div class="card-body">
//                     <h5 class="card-title">제목</h5>
//                     <p class="card-text">내용</p>
//                     <button class="btn btn-primary">담기</button>
//                   </div>
//                   </div>`;

// document.querySelector('.row').append(first);
//두번째 방법



// document.querySelectorAll('.card-title h5')[0].innerHTML = fruits[0].name;
// document.querySelectorAll('.card-text')[0].innerHTML = fruits[0].memo;
// document.querySelectorAll('.card-img-top')[0].setAttribute('src', `img/${fruits[0].name}.jpg`)

// for (let i = 0; i <= fruits.length; i++) {
//   $('.card-body h5').eq(i).html(fruits[i].name);
//   $('.card-text').eq(i).html(fruits[i].memo);
//   $('.card-img-top').eq(i).attr('src', `img/${fruits[i].name}.jpg`)
// }

// $('.card-body h5').eq(0).html(fruits[0].name);
// $('.card-text').eq(0).html(fruits[0].memo);
// $('.card-img-top').eq(0).attr('src', `img/${fruits[0].name}.jpg`)

// $('.card-body h5').eq(1).html(fruits[1].name);
// $('.card-text').eq(1).html(fruits[1].memo);
// $('.card-img-top').eq(1).attr('src', `img/${fruits[1].name}.jpg`)

// $('.card-body h5').eq(2).html(fruits[2].name);
// $('.card-text').eq(2).html(fruits[2].memo);
// $('.card-img-top').eq(2).attr('src', `img/${fruits[2].name}.jpg`)

// fruits.forEach((data,i) => {
// $('.card-body h5').eq(i).html(data.name);
// $('.card-text').eq(i).html(data.memo);
// $('.card-img-top').eq(i).attr('src', `img/${data.name}.jpg`)
  
// });