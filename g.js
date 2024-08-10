function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
 classifier=ml5.imageClassifier("MobilNet", l)
}

function l(){
    console.log("modelo cargado");
}

function draw(){
image(video, 0, 0, 400, 400);
classifier.classify(video, m)
}

function m(n){
document.getElementById("j").innerHTML=n[0].label;
document.getElementById("k").innerHTML=n[0].result;
}