const API_KEY = '6e7b0fc7305c68ca15b1f04322064051';
let name= document.querySelector(`#name`);
let main= document.querySelector(`#main`);
let temp= document.querySelector(`#temp`);


function connect(position) {  
  const lat =position.coords.latitude;
  const lon =position.coords.longitude;
  console.log(`위도:${lat}, 경도:${lon}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(URL).then((response) => response.json())
            .then((data)=> {
              console.log(data.name); //지역이름
              console.log(data.weather[0].main); // 날씨
              console.log(data.main.temp); // 온도

              name.textContent = data.name;
              main.textContent = data.weather[0].main;
              temp.textContent = data.main.temp+`℃`;//ㄹ한자
            
            });
}

function errorConn()
 {
  alert('위치연결 실패');
 }
navigator.geolocation.getCurrentPosition(connect, errorConn);

