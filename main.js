rightWristY=0;
rightWristX=0;
function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.parent('game');
    video=createCapture(VIDEO);
	video.size(500,500);
    video.parent('game');
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', results);
}
function results(results){
    if(results.length>0){
        rightWristY=results[0].pose.rightWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
    }
}
function reStart(){

}
function play(){
    
}
function draw(){
    image(video,0,0,500,500);
    fill('red');
    stroke('red');
    circle(30,rightWristY,20);
}
function modelLoaded(){
    console.log("The modal is loaded");
}