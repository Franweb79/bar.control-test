


const myCanvas = document.getElementById('myCanvas');


const ctx = myCanvas.getContext('2d');


//will set width to half canvas to avoid stress moving the bar
const width = myCanvas.width = window.innerWidth/2;
const height = myCanvas.height = window.innerHeight;




class Bar{

    
    constructor(x,y,width, height){

     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
    
    }

    draw(){

        //First, we use beginPath() to state that we want to draw a shape on the paper.
       
        ctx.beginPath();

       

        ctx.fillStyle = "red";

        ctx.fillRect(this.x, this.y, this.width, this.height);
        

        
    }

    deleteOldRectangle(){
        
        ctx.clearRect(this.x, this.y, this.width, this.height);
      
    }
}



const myBar=new Bar(25,25,25,175); 
myBar.draw();


document.addEventListener("mousemove",(event)=>{
   

    myBar.deleteOldRectangle();
    myBar.y=event.pageY;//new rectangle will start where pageY
    myBar.draw();

    //TODO when bar reaches bottom, should not go further, maybe that will be controlled inside draw
    
  
});