/**
 * Created by ÀîºÀ on 2015/12/14 0014.
 */
function Director(){
    this.gameCtx=null;//ÓÎÏ·»æÖÆ
    this.player=null;//Íæ¼Ò¶ÔÏó
    this.enemies=[];//µÐÈË
    this.back=null;//ÓÎÏ·±³¾°
    this.bullets=[];//×Óµ¯
    this.backAudio=null;//±³¾°ÒôÀÖ
    this.fireAudio=null;//×Óµ¯ÉùÒô
    this.enemyExplodeAudio=null;//µÐÈË±¬Õ¨µÄ±³¾°ÒôÀÖ
    this.playerExplodeAudio=null;//Íæ¼Ò±¬Õ¨µÄ±³¾°ÒôÀÖ
    this.gameIntervalId=null;//intervalµÄIDºÅ
    this.score=0;
}
Director.prototype.play=function(){
        //alert("Game Play");
    var fps=60;
    var temp=this;
    this.gameIntervalId=setInterval(function(){
        temp.gameLoop()
    },1000/fps);
    this.backAudio.play();
}
Director.prototype.pause=function(){
    clearInterval(this.gameIntervalId);
}
Director.prototype.gameLoop=function(){//GameLoop to Control game
    //ÇåÆÁ
    this.gameCtx.clearRect(0,0,600,450);
    //»æÖÆ±³¾°
    this.back.draw();
    //»æÖÆ·É»ú
    if(!this.player.destoryed){
        this.player.draw();
    }

    var e = Math.random()*1000;
    var direc2= new Director();
    direc2.gameCtx=document.getElementById("game_canvas").getContext("2d")
    direc2.enemyExplodeAudio=document.getElementById("enemyExplodeAudio")
    if(e>996){
        this.enemies.push(new Enemy(direc2.gameCtx,direc2.enemyExplodeAudio))
    }
    if(e<3){
        this.enemies.push(new othersEnemy(direc2.gameCtx,direc2.enemyExplodeAudio))
    }
 var newEnemies=this.enemies.filter(function(elem){//¹ýÂËÊý×é
       if(!elem.destroyed)
       {
           return true;
       }
    });
    this.enemies=newEnemies;
    //»æÖÆÔÉÊ¯
   for(var i=0;i<this.enemies.length;i++){
       this.enemies[i].draw();
   }

    //»æÖÆ×Óµ¯
    for(var i=0;i<this.bullets.length;i++){
        this.bullets[i].draw();
    }
    //Åö×²¼ì²â

    this.checkCollision();

    //»æÖÆ·ÖÖµ
    this.gameCtx.fillText("Score ",460,40,80);
    this.gameCtx.fillText(this.score,535,40,120);

    //»æÖÆÊ£Óà·É»ú¼Ü´Î
    this.img=new Image();
    this.img.src="images/PlayerNum.png";
    this.gameCtx.drawImage(this.img, 10, 420);
    this.gameCtx.drawImage(this.img, 40, 420);
    this.gameCtx.drawImage(this.img, 70, 420);
    this.imgBlood=new Image();
    this.imgBlood.src="images/BloodBar.png";
    this.gameCtx.drawImage(this.imgBlood, 400, 435);
}

Director.prototype.checkCollision=function(){//¼ì²âÅö×²
    for(var i=0;i<this.enemies.length;i++){
        if(!this.enemies[i].exploded) {
            for(var j=0;j<this.bullets.length;j++){
                if (isCollided(this.enemies[i], this.bullets[j])) {
                    this.enemies[i].explode();
                    this.bullets[j].explode();
                    this.score+=50;
                }
            }
        }
    }
}
