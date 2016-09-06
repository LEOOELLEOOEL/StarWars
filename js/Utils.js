/**
 * Created by 李豪 on 2015/12/21 0021.
 */
Array.prototype.remove=function(obj){//销毁子弹数组
    for(var i=0;i<this.length;i++)
    {
        if(this[i]==obj){
            this.splice(i,1);
            return this;
        }
    }
}
function isCollided(obj1,obj2){
    if(obj1&&obj2&&obj1.getCenter&&obj2.getCenter){
        var cen1=obj1.getCenter();
        var cen2=obj2.getCenter();
        if(Math.abs(cen1.x-cen2.x)<=(obj1.width+obj2.width)/2 &&Math.abs(cen1.y-cen2.y)<=(obj1.height+obj2.height)/2)
        {
            return true;
        }
    }
    return false;
}