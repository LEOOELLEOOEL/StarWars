/**
 * Created by ÀîºÀ on 2015/12/31 0031.
 */
function othersEnemy(ctx,explodeAudio)
{
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/Rock.png";
    this.x=Math.random()*500;
    this.y=0;
    this.width=66;
    this.height=70;
    this.exploded=false;
    this.explodeImg=new Image();
    this.explodeImg.src="images/explosionEnemy.png"
    this.explodeIndex=0;
    this.explodeAudio=explodeAudio;
    this.destroyed=false;
}
var sprite = 0;
othersEnemy.prototype.draw=function()
{
    if(!this.exploded)
    {
        this.ctx.save();
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2);
        this.y++;
        this.x--;
        if(-this.width>600){
            -this.width--;
        }
        if(-this.width<0){
            -this.width++
        }
        this.ctx.restore();
        sprite += 1;
        if(this.y>450){
            this.destroyed=true;
        }
    }
    else{

        this.ctx.drawImage(this.explodeImg,this.explodeIndex*44,0,44,49,this.x,this.y,44,49);
        this.y--;
        this.x++;
        this.explodeIndex++;
        if(this.explodeIndex>7)
        {
            this.destroyed=true;
        }

    }
}
othersEnemy.prototype.getCenter=function()
{
    return new Point(this.x+this.width/2,this.y+this.height/2);
}
othersEnemy.prototype.explode=function()
{
    this.explodeAudio.play();
    this.exploded=true;
}