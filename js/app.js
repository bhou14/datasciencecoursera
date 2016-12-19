var myObj = null;

function init(){
   myObj = document.getElementById('myobj');
   myObj.style.position= 'relative';
   myObj.style.left = '0px';
}

function moveRight(){
  var lf = parseInt(myObj.style.left);
  if(lf > 800) lf = 0;
  else lf += 100;
  myObj.style.left = lf + 'px';
  setTimeout(moveRight, 1000);
}
