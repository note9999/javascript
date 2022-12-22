function check(age) {
  if(age>=20){
    return true;
  } else{
    return false;
  }
}

let age = prompt('나이입력')

if(check(age)){
  alert(`성인`);
} else {
  alert(`미성년`)
}