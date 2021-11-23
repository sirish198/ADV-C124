function setup() {
    video = createCapture(VIDEO);
    video.size(600, 500);
  
    canvas = createCanvas(600, 500);
    canvas.position(700,80);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
  function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}
function draw() {
    background('#6C91C2');
    }
    