var c = document.getElementById("candy");
ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
var dx = -1;
var dy = -1;
var pretty = function(e){
    var r = c.getBoundingClientRect();
    var x = e.clientX - r.left;
    var y = e.clientY - r.top;
    ctx.beginPath();
    if (dx != -1){
    ctx.moveTo(dx,dy);
    }
    ctx.lineTo(x,y);
    dx = x;
    dy = y;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
}
var refresh = function(){
    ctx.clearRect(0,0,1024,768);
    ctx.beginPath();
    dx = -1;
    dy = -1;
}
var kirkles = function(){
    
}
c.addEventListener('click', pretty);
var d = document.getElementById("fresh");
d.addEventListener('click', refresh);
