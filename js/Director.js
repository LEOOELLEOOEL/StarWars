/**
 * Created by ��� on 2015/12/14 0014.
 */
function Director(){
    this.gameCtx=null;//��Ϸ����
    this.player=null;//��Ҷ���
    this.enemies=[];//����
    this.back=null;//��Ϸ����
    this.bullets=[];//�ӵ�
    this.backAudio=null;//��������
    this.fireAudio=null;//�ӵ�����
    this.enemyExplodeAudio=null;//���˱�ը�ı�������
    this.playerExplodeAudio=null;//��ұ�ը�ı�������
    this.gameIntervalId=null;//interval��ID��
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
    //����
    this.gameCtx.clearRect(0,0,600,450);
    //���Ʊ���
    this.back.draw();
    //���Ʒɻ�
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
 var newEnemies=this.enemies.filter(function(elem){//��������
       if(!elem.destroyed)
       {
           return true;
       }
    });
    this.enemies=newEnemies;
    //������ʯ
   for(var i=0;i<this.enemies.length;i++){
       this.enemies[i].draw();
   }

    //�����ӵ�
    for(var i=0;i<this.bullets.length;i++){
        this.bullets[i].draw();
    }
    //��ײ���

    this.checkCollision();

    //���Ʒ�ֵ
    this.gameCtx.fillText("Score ",460,40,80);
    this.gameCtx.fillText(this.score,535,40,120);

    //����ʣ��ɻ��ܴ�
    this.img=new Image();
    this.img.src="images/PlayerNum.png";
    this.gameCtx.drawImage(this.img, 10, 420);
    this.gameCtx.drawImage(this.img, 40, 420);
    this.gameCtx.drawImage(this.img, 70, 420);
    this.imgBlood=new Image();
    this.imgBlood.src="images/BloodBar.png";
    this.gameCtx.drawImage(this.imgBlood, 400, 435);
}

Director.prototype.checkCollision=function(){//�����ײ
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
