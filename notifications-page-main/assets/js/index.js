let MarkAsRead = document.getElementById("uncheck")

let SerialNumber = document.getElementById("serialnumber")

let FirstComment = document.getElementById("first")

let SecondComment = document.getElementById("second")

let ThirdComment = document.getElementById("third")

let Dot = document.getElementById("circleone")
let DotTwo = document.getElementById("circletwo")
let DotThree = document.getElementById("circlethird")

function markAsread(){
 MarkAsRead.classList.toggle("markas");
 if (MarkAsRead.classList.contains("markas")){
  FirstComment.style.backgroundColor = 'rgb(246, 252, 255)';
  SecondComment.style.backgroundColor = 'rgb(246, 252, 255)';
  ThirdComment.style.backgroundColor = 'rgb(246, 252, 255)';
}else{
 FirstComment.style.backgroundColor = 'white';
 SecondComment.style.backgroundColor = 'white';
 ThirdComment.style.backgroundColor = 'white';
}
 Dot.style.display = 'none';
 DotTwo.style.display = 'none';
 DotThree.style.display = 'none';
 SerialNumber.innerText = '0'
}


