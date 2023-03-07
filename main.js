img = "";
var status="";
objects=[];
function preload(){
  //img = loadImage('dog_cat.jpg');
}
function setup(){
 canvas=createCanvas(350,350);
 canvas.center();
 objectDetection=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status detecting objects";
video= createCapture(VIDEO);
video.size(350,350);
video.hide();
document.getElementById("status").innerHTML="detecting objects";
}
function draw(){
  r= random(255);
  g= random(255);
  b= random(255);
image(video,0,0,350,350);
if(status != ""){
  objectDetection.detect(video,gotResults);
  for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="status:objects detected";
    document.getElementById("objectessssss").innerHTML="number of objects detected are "+objects.length;
    fill(r,g,b);
    percent= floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    
  }
}
/*stroke("blue");
fill('red');
text("dog",35,35);
noFill();
rect(35,35,300,600);
 rect(255,55,300,600);
 stroke("blue");
 fill("red");
 text("cat",255,55);*/
}
function modelLoaded(){
  console.log("moel is loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  status=true;
 
}
function gotResults(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects=results;
}
