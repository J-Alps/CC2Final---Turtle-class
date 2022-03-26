let myTurtles = []
var points = []
t=1
//var c = color(random(5), random(5), random(5))
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(30)




  var density = 50
  var space = width / density

  for (var x = 0; x < width; x+= space){
    for (var y = 0; y < height; y += space){
      var p = createVector(x,y)
      points.push(p)
      //myTurtles[i] = new turtle(points[i].x, points[i].y)

    }
  }



  for (var i = 0; i < points.length ; i++){
    myTurtles[i] = new turtle(points[i].x, points[i].y)
  }  
}

function draw() {
  noStroke()
  fill(255)
  
  for (var d = 0; d < myTurtles.length; d++){  //for every turtle
    
    myTurtles[d].movement()     //make them move and display them
    myTurtles[d].display()
    //print(myTurtles[1].angle)
    
  }




}

class turtle {
  constructor(x,y,angleX,angleY){
    //this.i = i
    this.x = x
    this.y = y
    this.r = random(0)
    this.g = random(255)
    this.b = random(255)
    this.angleX = map(noise(this.x),0,1,0,720)
    this.angleY = map(noise(this.y),0,1,0,720)
    //this.moveX = (cos(this.angleX))
    //this.moveY =(sin(this.angleY))
    this.vectors = p5.Vector.fromAngle(this.angleY)
    //this.vectors = createVector(cos(this.angleX),sin(this.angleY))

  }
  movement(){
    this.x += this.vectors.x
    this.y += this.vectors.y
    if (this.x > width){
      this.x *= -1
    }

    if (this.y > height){
      this.y *= -1
    }

    else{
      this.x += this.vectors.x
      this.y += this.vectors.y
    }
    
    
}

  display(){
    fill(this.r,this.g,this.b)
    circle(this.x,this.y,5)
  }
}
