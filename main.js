function setup(){
    canvas=createCanvas(600,600);
    canvas.parent('game');
    video=createCapture(VIDEO);
    video.size(600,600);
    video.parent('game');
    posenet=ml5.poseNet(video, modelLoaded);
}
function reStart(){

}
function play(){
    
}
function draw(){
    
}
function modelLoaded(){
    console.log("The is loaded");
}
function preload(){

}