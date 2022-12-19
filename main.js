function preload()
{
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Birthday_candles.jpg/1200px-Birthday_candles.jpg")
}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
    image(img, 0, 0, 320, 240);

}
function take_snapshot()
{
    save("max.png");
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}