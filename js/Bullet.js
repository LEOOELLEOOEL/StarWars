/**
 * Created by ¿Ó∫¿ on 2015/12/21 0021.
 */
function Bullet(ctx,x,y,buls){
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/projectile.png";
    this.x=x;
    this.y=y;
    this.buls=buls;
    this.width=16;
    this.height=28;

    this.exploded=false;
    this.destoryed=false;
}
Bullet.prototype.draw=function(){

    if(!this.exploded) {
        this.ctx.drawImage(this.img,this.x+5,this.y+30);
        this.ctx.drawImage(this.img,this.x-11,this.y);
        this.ctx.drawImage(this.img,this.x-27,this.y+30);
        this.y -= 5;
        if (this.y < -10) {
            this.buls.remove(this);//œ˙ªŸ◊”µØ
        }
    }else{
        this.destoryed=true;
        this.buls.remove(this);
    }

}
Bullet.prototype.getCenter=function(){
    return new Point(this.x+this.width/2,this.y+this.height/2)
};
Bullet.prototype.explode=function(){
    this.exploded=true;
}