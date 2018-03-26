var numBalls = 100;
    var balls = [];
    for(var i = 0; i < numBalls; i++){
        balls.push({
            x: random(10,390),
            y: random(10,390),
            xSpeed: random(-5,5),
            ySpeed: random(-5,5)
        });
    }

var draw = function() {
    background(0, 0, 0);
    var x = mouseX;
    var y = mouseY;
    noStroke();
    fill(0, 0, 0);
    ellipse(x, y,80,80);
    background(0,0,0);
   
    //good guy
    noStroke();
    fill(36, 214, 227);
    ellipse(x,y,50,50);
    fill(169, 209, 7);
    ellipse(x, y, 30, 30);
    fill(255, 111, 0);
    ellipse(x, y, 10, 10);
    
    for(var i = 0; i < numBalls; i++){
        fill(255, 0, 0);
        ellipse(balls[i].x, balls[i].y, 20, 20);
        if(balls[i].x > 390 || balls[i].x < 10){
            balls[i].xSpeed *= -1;
        }
        if(balls[i].y > 390 || balls[i].y < 10){
            balls[i].ySpeed *= -1;
        }
        balls[i].x += balls[i].xSpeed;
        balls[i].y += balls[i].ySpeed;
        
    }
    
    for(var i = 0; i < numBalls; i++){
        if(Math.pow(x-balls[i].x,2) + Math.pow(y-balls[i].y,2) <= Math.pow(25+10,2)){
            balls.splice(i,1);
            numBalls--;
        }
    
    }
};

