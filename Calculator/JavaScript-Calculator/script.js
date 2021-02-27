let selection = document.getElementById("selection");
let display = document.querySelector('.result');
let clear = document.querySelector('.clear');


selection.addEventListener('click',clicked);
function clicked(e){
  let value = e.target.value;
  if (display.value !=="" && value ==="="){
    display.value = eval(display.value);
  }
  else{
    display.value += value;
  }
};

clear.addEventListener('click',()=>{
      display.value = ''
})