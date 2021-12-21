


const myCanvas = document.getElementById('myCanvas');


const ctx = myCanvas.getContext('2d');



const width = myCanvas.width = window.innerWidth;
const height = myCanvas.height = window.innerHeight;




class Palo{

    
    constructor(x,y,width, height){

     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
    
    }

    draw(){

        //First, we use beginPath() to state that we want to draw a shape on the paper.
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath

        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
        ctx.beginPath();

       //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

       https://lavrton.com/hit-region-detection-for-html5-canvas-and-how-to-listen-to-click-events-on-canvas-shapes-815034d7e9f8/

        ctx.fillStyle = "red";

        ctx.fillRect(this.x, this.y, this.width, this.height);
        

        
    }

    //we paint as background the old Y position when mousemove is triggered
    deleteOldPositionY(){
        let oldY=this.y; // we store old this.y because we will draw first
        //before deleting, so we need to store it on a local variable
        ctx.clearRect(this.x, this.y, this.width, this.height);
      
    }
}



const myPalo=new Palo(25,25,25,175);
myPalo.draw();


document.addEventListener("mousemove",(event)=>{
   // myPalo.y+=myPalo.y++;
   // myPalo.draw();

  /* console.log("event page",event.pageX, event.pageY);
   console.log ("mypalo x e y",myPalo.x, myPalo.y );
   console.log ("mypalo width y height",myPalo.width, myPalo.height );*/



   if(   ( (event.pageX>=myPalo.x) && ( event.pageX <= (myPalo.x + myPalo.width) ) ) && ( (event.pageY>=myPalo.y) && (event.pageY<= (myPalo.y + myPalo.height) ) )   ){
        
    
        myPalo.deleteOldPositionY();
        console.log(event.pageX, event.pageY);
        myPalo.y=event.pageY;//new rectangle will start where pageY
        myPalo.draw();
   }

   //up
   if(   ( (event.pageX>=myPalo.x) && ( event.pageX <= (myPalo.x + myPalo.width) ) ) && ( (event.pageY>=myPalo.y-100) && (event.pageY<=(myPalo.y)) ) ){
        
    
    myPalo.deleteOldPositionY();
    console.log(event.pageX, event.pageY);
    myPalo.y=event.pageY;//new rectangle will start where pageY
    myPalo.draw();
    }




  
});