/**
 * Created by ¿Ó∫¿ on 2015/12/14 0014.
 */
$(function(){
    $(document).keydown(function(e){
        switch(e.which){//º¸≈Ã∞¥œ¬
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
    }).keyup(function(e){//º¸≈ÃµØ∆
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
    direc.back=new Background(direc.gameCtx);//ªÊ÷∆±≥æ∞
    direc.gameCtx.font="30px Œ¢»Ì—≈∫⁄";//∑÷ ˝
    direc.gameCtx.fillStyle="yellow";//∑÷÷µ◊÷ÃÂ—’…´
    direc.backAudio=document.getElementById("backAudio");//js”Ôæ‰//±≥æ∞“Ù¿÷
    direc.fireAudio=document.getElementById("shootAudio");//◊”µØ…‰ª˜±≥æ∞…˘
    direc.explosionEnemy=document.getElementById("enemyExplodeAudio");//µ–»À¥›ªŸ±≥æ∞“Ù¿÷
    direc.playerExplodeAudio=document.getElementById("playerExplodeAudio");
    //direc.backAudio=$("#backAudio")[0];//jquer”Ôæ‰
    direc.player=new Player(direc.gameCtx,direc.bullets,direc.fireAudio,direc.playerExplodeAudio);//∑…ª˙
    direc.enemies.push(new Enemy(direc.gameCtx,direc.explosionEnemy));//‘… Ø
    direc.play();

});
