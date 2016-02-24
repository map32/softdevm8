var c = document.getElementById("kyk");
ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
var pretty = function(){
    var d = 1;
    var z = 0;
    var draw = function(){
	z = d+z;
	ctx.clearRect(0,0,c.width,c.height);
    	ctx.beginPath();
    	ctx.arc(c.width/2,c.height/2,z,0,2*Math.PI);
	ctx.fill();
    	ctx.stroke();
	if (z >= c.width/2 || z >= c.height/2){
		d = -1;	
	} else if (z <= 0) {
		d = 1;
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
