var screenwidth =  0;
var screenheigth =  0;
var izquierda_derecha = 0;
var robert = "robert";
function setup() {
   console.log("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) ;
   screenwidth = screen.width;
   screenheigth = screen.height;
    canvas = createCanvas(screenwidth, screenheigth);
    
    
    
    robert = new Sprite(540,200,27,30)
    robert.addImage(Imagen);
    
    
}
  function preload(){
   Imagen = loadImage("robert.png");
  }
   function draw(){
    background(3,6,65);
    drawSprite();
    
   }
   
   function keyPressed(){
    if(keyCode == 65){
      robert.velocity.x = - 6 ;
    }
    if(keyCode == 68){
      robert.velocity.x = + 6;
    }
    
  }
