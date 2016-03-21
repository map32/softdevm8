var dem = d3.select("#dem");
var rep = d3.select("#rep");

var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
var ddel = {"AL":44+9,"AK":20,"AZ":85,"AR":22+10,"CA":546,"CO":28+38,"CT":70,"DE":31,"DC":45,"FL":133+65,"GA":73+29,"HI":34,"ID":27,"IL":68+67,"IN":92,"IA":23+21,"KS":9+24,"KY":61,"LA":37+14,"ME":9+16,"MD":118,"MA":46+45,"MI":60+67,"MN":31+46,"MS":30+4,"MO":32+32,"MT":27,"NE":10+15,"NV":20+15,"NH":9+15,"NJ":142,"NM":43,"NY":291,"NC":59+45,"ND":23,"OH":79+62,"OK":17+21,"OR":74,"PA":210,"PR":67,"RI":33,"SC":39+14,"SD":25,"TN":44+23,"TX":147+75,"UT":37,"VT":16,"VA":62+33,"WA":118,"WV":37,"WI":96,"WY":18};
//var rdel = {"AL":36+13+1,"AK":11+12+5,"AZ","AR":16+14+9,"CA","CO","CT","DE","DC","FL","GA":40+18+14,"HI","ID","IL","IN","IA":7+8+7+1,"KS":9+24+6+1,"KY":17+15+7+7,"LA":,"ME","MD","MA":22+4+8+8,"MI","MN":8+13+17,"MS","MO","MT","NE","NV":14+6+7+1,"NH":11+3+2+4,"NJ","NM","NY","NC","ND","OH","OK":13+15+12,"OR","PA","PR","RI","SC":50,"SD","TN":33+16+9,"TX":48+104+3,"UT","VT":8+8,"VA":17+8+16+5,"WA","WV","WI","WY"};

dem.selectAll("div").data(states).enter().append("div").attr("class","dem").style("width",function(d){return ddel[d]+"px";}).text(function(d){return d+" "+ddel[d];});

//rep.selectAll("div").data(states).enter().append("div").class("rep").style("width",function(d){return rdel[d]*10+"px";}).text(function(d){return d+" "+rdel[d];});

console.log(states);
