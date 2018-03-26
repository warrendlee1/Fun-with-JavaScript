noStroke();
var x_p = [[124,194],[124,150],[124,106],[168,106],[213,106],[213,150],[213,194],[169,194]];
var blue_index = 1;
var blue_index_b = 0;
var draw = function() {
    for(var i = 0; i< 8; i++){
        fill(214, 214, 214);
        rect(x_p[i][0],x_p[i][1],40,40);
    }
        fill(74, 134, 224);
        rect(x_p[blue_index][0], x_p[blue_index][1], 40, 40);
        rect(x_p[blue_index_b][0], x_p[blue_index_b][1], 40, 40);
        blue_index = (blue_index + 1)%8;
        blue_index_b = (blue_index_b + 1)%8;
};