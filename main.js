function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);

    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video,0,0,640,480);
    
    fill(255,251,111);
    rect(0,0,640,30);

    fill(255,251,111);
    rect(0,0,30,480);

    fill(255,251,111);
    rect(0,450,640,30);

    fill(255,251,111);
    rect(610,0,30,480);

    //circle1
    fill(146,255,112);
    rect(100,0,10,200);

    fill(199,255,112);
    circle(105,190,40);

    //circle2
    fill(146,255,112);
    rect(210,0,10,130);

    fill(199,255,112);
    circle(215,140,40);

    //circle3
    fill(146,255,112);
    rect(320,0,10,80);

    fill(199,255,112);
    circle(325,90,40);

    //circle4
    fill(146,255,112);
    rect(430,0,10,130);

    fill(199,255,112);
    circle(435,140,40);

    //circle5
    fill(146,255,112);
    rect(530,0,10,200);

    fill(199,255,112);
    circle(535,190,40);

    fill(255,251,111);
    rect(0,0,640,30);
}

function take_snapshot()
{
    save('student_name.png');
}

//fill(102,255,204);
//rect(100,0,10,80);

//fill(102,255,204);
//circle(105,90,40);