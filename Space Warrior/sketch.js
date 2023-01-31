//variables
var bg,bgIMG
var ss,ssIMG
var alien1
var alien2
var alien3
var alien4
var alien5
var alien6
var alien7
var alien8
var score=0
var gameState="play"
var aliengroup,lasergroup
var laser
var edges
function preload() {
    //loading images
    bgIMG=loadImage("assets/background.jpg")
    ssIMG=loadImage("assets/ship.png")
    alien1=loadImage("assets/crawler.png")
    alien2=loadImage("assets/creeper.png")
    alien3=loadImage("assets/eyefish.png")
    alien4=loadImage("assets/faceeater.png")
    alien5=loadImage("assets/clump.png")
    alien6=loadImage("assets/slender-walker.png")
    alien7=loadImage("assets/spinner.png")
    alien8=loadImage("assets/shooter.png")
}
function setup() {
    createCanvas(1600,700)
    bg=createSprite(800,350,1600,700)
    bg.addImage(bgIMG)
    ss=createSprite(150,350)
    ss.addImage(ssIMG)
    aliengroup=new Group();
}
function draw() {
    background(0);
    fill(255);
    textSize(30);
    text("Score: "+score,50,50)
    if(gameState==="play") {
        if(keyDown(UP_ARROW)) {
            ss.y-=5
        }
        if(keyDown(DOWN_ARROW)) {
            ss.y+=5
        }
    }
    spawnAliens()
    drawSprites();
}
function spawnAliens() {
    if(frameCount%150===0) {
        var rand=Math.round(random(100,600));
        alien=createSprite(1600,rand);
        alien.velocityX=-4
        alien.lifetime=600
        aliengroup.add(alien);
    }
}

