/**
 * Created by ¿Ó∫¿ on 2015/12/16 0016.
 */
function Enemy(ctx,EnemyAudio){
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/Rock.png";
    this.x=Math.random()*300;
    this.y=30;
    this.width=66;
    this.height=70;
    this.exploded=false;
    this.explodedImg=new Image();
    this.explodedImg.src="images/explosionEnemy.png";
    this.explodedIndex=0;
    this.EnemyAudio=EnemyAudio;
    this.destroyed=false;
}

Enemy.prototype.draw=function(){
    if(!this.exploded){
        this.ctx.drawImage(this.img, this.x, this.y);
        this.y++;
        this.x++;
        if(this.y>450){
            this.destroyed=true;
        }
    } else{
        this.ctx.drawImage(this.explodedImg,this.explodedIndex*44,0,44,49,this.x,this.y,44,40);
        this.explodedIndex++;
        if(this.explodedIndex>7){
            //…æ≥˝‘… Ø
            this.destroyed=true;

        }
    }


}
Enemy.prototype.getCenter=function(){
    return new Point(this.x+this.width/2,this.y+this.height/2)
}
Enemy.prototype.explode=function(){
    this.EnemyAudio.play();
    this.exploded=true;
}