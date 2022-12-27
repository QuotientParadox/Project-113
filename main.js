function preload()
{
    //img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Birthday_candles.jpg/1200px-Birthday_candles.jpg")
}
function setup()
{
    createCanvas(640, 480);
    // canvas.position(110, 250);
    // tint_color = "";
    video = createCapture(VIDEO);
    video.hide()
}
function draw()
{
    image(video, 0, 0, 640, 480);
    fill(255,0,0);
    circle(80, 80, 70);
    circle(560, 80, 70);
    circle(80, 400, 70);
    circle(560, 400, 70);
    fill(0, 255, 0);
    rect(110, 65, 420, 20);
    rect(70, 105, 20, 270);
    rect(550, 105, 20, 270);
    rect(110, 390, 420, 20);
}
function take_snapshot()
{
    save("picture.png");
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}