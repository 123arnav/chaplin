mustacheX=0;
mustacheY=0;
bowX=0;
bowY=0;
hatX=0;
hatY=0;
function preload(){
    mustache=loadImage("mustache.png");
hat=loadImage("hat.png");
bow=loadImage("bow.png");
}
function setup(){
    canvas=createCanvas(400,355)
    canvas.position(450,160)
    video=createCapture(VIDEO)
    video.size(400,380)
    video.hide();
    console.log(ml5.version);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("load");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    mustacheX=(results[0].pose.nose.x)-35;
    mustacheY=(results[0].pose.nose.y)-15;
    hatX=(results[0].pose.nose.x)-120;
    hatY=(results[0].pose.nose.y)-180;
    bowX=(results[0].pose.nose.x)-45;
    bowY=(results[0].pose.nose.y)+70;
    console.log(mustacheY);
    console.log(mustacheX);
       }
}
function draw(){
image(video,0,0,400,400);
image(mustache,mustacheX,mustacheY,70,85);
image(hat,hatX,hatY,270,120);
image(bow,bowX,bowY,100,100);
//fill(200,0,0);
//stroke(0,0,0);
//circle(mustacheX,mustacheY,40,);
}
function snip(){
    save("man.jpg");
    }