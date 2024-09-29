const current_num_btn = document.getElementById("current-num");
const increase_btn = document.getElementById("increase");
const reset_btn = document.getElementById("reset");
const decrease_btn = document.getElementById("decrease");
const mainbox = document.getElementById('box');
var newnum;

increase_btn.addEventListener("click", function () {
  newnum = Number(current_num_btn.innerHTML) + 1;
  current_num_btn.innerHTML = newnum;
});
// increase_btn.addEventListener('click' , function(){
//     document.getElementById('box').style.backgroundColor = 'blue';
// })

reset_btn.addEventListener("click", function () {
  newnum = Number((current_num_btn.innerHTML = 0));
  current_num_btn.innerHTML = newnum;
});
// reset_btn.addEventListener('click' , function(){
//     document.getElementById('box').style.backgroundColor = 'green';
// })

decrease_btn.addEventListener("click", function () {
  newnum = Number(current_num_btn.innerHTML) - 1;
  current_num_btn.innerHTML = newnum;
});

// decrease_btn.addEventListener('click' , function(){
//     // document.getElementById('box').style.backgroundColor = 'red'
// })


increase_btn.addEventListener('click' , function(){
    if(newnum>0){
        current_num_btn.style.color = 'lightblue';
    }
})

decrease_btn.addEventListener('click', function(){
    if(newnum < 0 ){
       current_num_btn.style.color = 'lightpink';
        }
    }

)
reset_btn.addEventListener('click' , function(){
    if(newnum == 0){
        current_num_btn.style.color = 'black';
    }
})

increase_btn.addEventListener('mousedown' , function(){
 mainbox.classList.add('color-blue')
})
increase_btn.addEventListener('mouseup' , function(){
  mainbox.classList.remove('color-blue')
})

decrease_btn.addEventListener('mousedown', function(){
  mainbox.classList.add('color-red');

})

decrease_btn.addEventListener('mouseup', function(){
  mainbox.classList.remove('color-red');

})