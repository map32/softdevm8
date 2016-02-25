var c = document.getElementById("kyk");
var img = new Image();
img.src = "https://secure.static.tumblr.com/2f66702c53598952d1fa7b828ed61ad6/flsthpo/v3Rnfuv98/tumblr_static_tumblr_static_d9vendggs9kcg84ocssg40okk_640.jpg";
ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
var pretty = function(){
    var dx = 5;
    var dy = 5;
    var x = Math.random()*(c.width-200);
    var y = Math.random()*(c.height-100);
    var draw = function(){
	x += dx;
	y += dy;
	ctx.clearRect(0,0,c.width,c.height);
    	ctx.drawImage(img, x, y, 200, 100);
	if (x+200 >= c.width){
		dx = -5;	
	} else if (x <= 0) {
		dx = 5;
	}
	if (y+100 >= c.height){
		dy = -5;	
	} else if (y <= 0) {
		dy = 5;
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
