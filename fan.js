Status = "";
fan_image = "";

function preload()
{
    fan_image = loadImage("fan.jpg");
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded()
{
    console.log("model loaded!");
    Status = true;
    object_detector.detect(fan_image,gotResults);
}
function gotResults(results,error)
{
    if(error)
    {
        console.error(error)
    }
    console.log(results)
}
function draw()
{
    image(fan_image,0,0,640,350);
}