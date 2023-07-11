
function preload(){
    img1=loadImage("https://i.postimg.cc/hPF8pG2m/png-transparent-moustache-mustache-hair-beard-mustache-png-thumbnail-removebg-preview.png")
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)

}
function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-40;
        nosey=results[0].pose.nose.y-5;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}

function modelLoaded(){
    console.log("PoseNet isinitialized")
}

function draw(){
    image(video,0,0,300,300);
image(img1,nosex,nosey,80,60);
}


function takesnapshot(){

    save("myimg.png")
    
    }
nosex=0
nosey=0