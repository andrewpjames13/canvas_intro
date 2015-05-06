var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };

function drawBorder(){
    context.strokeStyle = 'red';
    context.strokeRect(0,0, size.x, size.y);
}

function clickCanvas(){
  var clickCount = 0;
    canvas.addEventListener('click', function() {
      if(clickCount === 0){
        context.fillStyle = 'blue';
        context.fillRect(0,0, size.x/2, size.y/2);
        clickCount = 1;
      }else{
        context.fillStyle = 'red';
        context.fillRect(size.x/2, size.y/2, size.x/2, size.y/2);
        clickCount = 0;
      }
    }, false);
}

function clearCanvas(){
  var clearBtn = document.getElementById('clear');
  clearBtn.addEventListener('click', function(){
    context.clearRect ( 0 , 0 , canvas.width, canvas.height );
  });
}

function drawCircle(){
  var greenBtn = document.getElementById('green');
  greenBtn.addEventListener('click', function(){

    var dia = canvas.width;
    var diaRandom = Math.floor(Math.random()*canvas.width);
    var radius = diaRandom * 0.5;

    context.arc(radius, radius, radius, 0, 2*Math.PI);
    context.fill();
  });
}

function btnClick(color){
  var redBtn = document.getElementById(color);
  redBtn.addEventListener('click', function(){
    var randomSizeX = Math.floor(Math.random()*size.x);
    var randomSizeY = Math.floor(Math.random()*size.y);
    context.fillStyle = color;
    context.fillRect(randomSizeX, randomSizeY, randomSizeX, randomSizeY);
  }, false);
}

function fibinocci(iterations){
  var fibBtn = document.getElementById('fib');
  fibBtn.addEventListener('click',function(){
  fArray = [1 , 1];
  context.fillRect(0,0, 20, 10);
  for(var i = 2; i<iterations; i++){
     fArray.push(fArray[fArray.length-1] + fArray[fArray.length-2]);
     context.fillStyle = getRndColor();
     context.fillRect((i*10), 0, (i*10), (fArray[fArray.length-1]*10));
  }
  console.log(fArray[fArray.length-1]);
  });
}

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

drawBorder();
clickCanvas();
clearCanvas();
// drawCircle();
btnClick('red');
btnClick('green');
btnClick('blue');
btnClick('orange');
fibinocci(6);
