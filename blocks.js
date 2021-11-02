var brush = document.getElementById("c1").getContext("2d");

function drawBackground(){
    brush.fillStyle = "#000000";
    brush.fillRect(0, 0, 400, 400);
}
drawBackground();

for(var r=0; r < 13; ++r){
    for(var c = 0; c < 13; ++c){
        brush.fillStyle = "#FF0000";
        brush.fillRect(10+30*c, 10+30*r, 20, 20);
    }
}

//Split between canvasses\\

var brush = document.getElementById("c2").getContext("2d");

function drawBackground(){
    brush.fillStyle = "#000000";
    brush.fillRect(0, 0, 400, 400);
}
drawBackground();

var r = -1;
while(r < 13){
    ++r;
    var c = -1;
    while(c < 13){
        ++c;
        if(r >= c){
            brush.fillStyle = "#FF0000";
            brush.fillRect(10+30*c, 10+30*r, 20, 20);
        }
    }
}
