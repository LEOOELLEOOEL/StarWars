/**
 * Created by ��� on 2015/12/14 0014.
 */
$(function(){
    $(document).keydown(function(e){
        switch(e.which){//���̰���
            case keyCode.keyDown:
                 keyStatue.downStatus=true
                break;
            case keyCode.keyUp:
                 keyStatue.upStatus=true
                break;
            case keyCode.keyLeft:
                 keyStatue.leftStatus=true
                break;
            case  keyCode.keyRight:
                 keyStatue.rightStatus=true
                break;
            case keyCode.keyEsc:
                window.close();
                break;
            case  keyCode.keySpace:
                  keyStatue.spaceStatus=true
                break;

        }
    }).keyup(function(e){//���̵���
        switch(e.which) {
            case keyCode.keyDown:
                keyStatue.downStatus = false
                break;
            case keyCode.keyUp:
                keyStatue.upStatus = false
                break;
            case keyCode.keyLeft:
                keyStatue.leftStatus = false
                break;
            case  keyCode.keyRight:
                keyStatue.rightStatus = false
                break;
            case  keyCode.keySpace:
                keyStatue.spaceStatus=false
                break;
        }
        });

   var direc=new Director();
    direc.gameCtx=document.getElementById("game_canvas").getContext("2d");
    direc.back=new Background(direc.gameCtx);//���Ʊ���
    direc.gameCtx.font="30px ΢���ź�";//����
    direc.gameCtx.fillStyle="yellow";//��ֵ������ɫ
    direc.backAudio=document.getElementById("backAudio");//js���//��������
    direc.fireAudio=document.getElementById("shootAudio");//�ӵ����������
    direc.explosionEnemy=document.getElementById("enemyExplodeAudio");//���˴ݻٱ�������
    direc.playerExplodeAudio=document.getElementById("playerExplodeAudio");
    //direc.backAudio=$("#backAudio")[0];//jquer���
    direc.player=new Player(direc.gameCtx,direc.bullets,direc.fireAudio,direc.playerExplodeAudio);//�ɻ�
    direc.enemies.push(new Enemy(direc.gameCtx,direc.explosionEnemy));//��ʯ
    direc.play();

});
