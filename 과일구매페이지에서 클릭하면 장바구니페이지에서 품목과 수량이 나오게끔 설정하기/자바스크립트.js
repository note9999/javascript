let fruits = [
  {name: 'apple', memo: '빨개요'},
  {name: 'mango', memo: '달달함'},
  {name: 'melon', memo: '맛있음'},
  {name: 'strawberry', memo: '맛있음'},
  {name: 'watermelon', memo: '맛있음'},
];

fruits.forEach((data) => {
  let second = `<div class="col">
                <div class="card" style="width: 18rem;">
                  <img src="img/${data.name}.jpg" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.memo}</p>
                    <button class="btn btn-primary cart">담기</button>
                  </div>
                </div>
                </div>`;

  $('.row').eq(0).append(second);
})

$('.cart').on('click', function(e) {

  let name = $(e.target).siblings('h5').html();

  if(localStorage.getItem('items') != null) {
    
    let isHave; // 과일이 로컬스토리지에 있나 없나를 알려주는 변수 
    let index; // 과일이 로컬스토리지에 있으면 해당 위치를 저장하는 변수 

    let temp = localStorage.getItem('items');
    temp = JSON.parse(temp);

    /*↓로컬스토리지에 담기를 누른 과일(name)이 있나없나를 찾아주는 반복*/ 
    temp.forEach((data,i) => {
      if(data.name==name){
        isHave=true; index=i; 
        /*index=i; 한 이유는 몇번째 배열방에 있는지, 해당과일이있는 배열방 위치를 나타냄 */
      }
    });
    
    if(isHave) {
      temp[index].cnt++; /*temp에 들어있는 i번방에 있는 index를 1증가시켜라*/
    } else{
      temp.push({'name':name,'cnt':1});  /** cnt가 0이면 아무것도 실행이 
      안되기 때문에 cnt1 이라는 경우의 수를 만들어주고, 배열안에 오브젝트로 넣어줌 */
    }

    // temp.push(name);
    
    temp = JSON.stringify(temp);

    localStorage.setItem('items', temp);


  } else {
    localStorage.setItem('items', JSON.stringify([{'name':name, 'cnt':1 }]));
    /**로컬스토리지안에 배열로에 오브젝트 넣고 싶음 근데 로컬스토리지엔 문자밖에 저장이안되므로
     * JSON을 이용해서 문자로 바꿔서 배열 형태로 넣음.
     */
  }
});


let list = localStorage.getItem('items');

list = JSON.parse(list);

list.forEach((data) => {

  $('.list').append(`<div>${data.name}:${data.cnt}</div>`);

});