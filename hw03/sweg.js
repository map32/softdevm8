var c = document.getElementById("kyk");
var img = new Image();
img.src = "";
ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
var pretty = function(){
    var dx = 1;
    var dy = 1;
    var x = Math.random()*c.width;
    var y = Math.random()*c.height;
    var draw = function(){
	x += dx;
	y += dy;
	ctx.clearRect(0,0,c.width,c.height);
    	ctx.drawImage(img, x, y, 200, 100);
	if (x >= c.width){
		dx = -1;	
	} else if (x <= 0) {
		dx = 1;
	}
	if (y >= c.height){
		dy = 1;	
	} else if (y <= 0) {
		dy = 1;
	}
	framy = requestAnimationFrame(draw);
    }
    var framy = window.requestAnimationFrame(draw);
}
var refresh = function(){
    window.cancelAnimationFrame(framy);
}
c.addEventListener('click', pretty);
var d = document.getElementById("pause");
d.addEventListener('click', refresh);
