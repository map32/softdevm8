var c = document.getElementById("kyk");
var cl = document.getElementById("cl");
var st = document.getElementById("st");
var k = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var a;
k.setAttribute("cx","512");
k.setAttribute("cy","384");
k.setAttribute("fill","red");
c.appendChild(k);

var pretty = function(){
    var d = 1;
    var z = 0;
    var draw = function(){
	z = d+z;
	k.setAttribute("r",z.toString());
	
	if (z >= 512 || z >= 384){
		d = -1;	
	} else if (z <= 0) {
		d = 1;
	}
    }
    a = setInterval(draw,1000/60);
}
var stop = function(){
    console.log("a");
    clearInterval(a);
}
cl.addEventListener('click', pretty);
st.addEventListener('click', stop);
