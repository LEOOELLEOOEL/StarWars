/**
 * Created by ¿Ó∫¿ on 2015/12/16 0016.
 */
function Player(ctx,buls,fireAudio,playerExplodeAudio){
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/Player.png";
    this.x=250;
    this.y=350;
    this.width=100;
    this.height=100;
    this.fireAudio=fireAudio;
    this.buls=buls;
    this.exploded=false;
    this.destroyed=false;
    this.explodeImg=new Image();
    this.explodeImg.src="images/explosionPlayer.png";
    this.explodeIndex=0;
    this.playerExplodeAudio=playerExplodeAudio;

}
Player.prototype.draw=function(){
    if(keyStatue.upStatus){
        this.y-=5;
        if(this.y<=0){
           this.y=0;
        }
    }else
    if(keyStatue.downStatus){
        this.y+=5;
        if(this.y>=360){
            this.y=360;
        }
    }else
    if(keyStatue.leftStatus){
        this.x-=5;
        if(this.x<=-6){
            this.x=-6;
        }
    }else
    if(keyStatue.rightStatus){
        this.x+=5;
        if(this.x>=506){
            this.x=506;
        }
    }else
    if(keyStatue.spaceStatus){
        this.fire();
        keyStatue.spaceStatus=false;
        this.fireAudio.play();
    }
    if(!this.exploded){
        this.ctx.drawImage(this.img,this.x,this.y);
    }else{
        this.ctx.drawImage(this.explodeImg,this.explodeIndex*42,0,42,43,this.x,this.y,42,43);
        this.explodeIndex++;
        if(this.explodeIndex>5){

            this.destroyed=true;
        }
        this.playerExplodeAudio.play();
    }

    }
Player.prototype.fire=function(){
    this.fireAudio.play();
    var bul=new Bullet(this.ctx,this.x+44,this.y-24,this.buls);
    this.buls.push(bul);
};
Player.prototype.getCenter=function(){
    return new Point(this.x+this.width/2,this.y+this.height/2);
}

Player.prototype.explode=function(){
    this.exploded=true;
}