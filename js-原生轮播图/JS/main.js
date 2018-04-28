
    var wrap=document.getElementById('wrap');
    var inner=document.getElementById('inner');
    var spanList=document.getElementById('paganation').getElementsByTagName('span');
    var left=document.getElementById('left');
    var right=document.getElementById('right');

    var clickFlag=true;
    var time;
    var index=0;
    var Distance=wrap.offsetWidth;

    function AutoGo(){
        var start=inner.offsetLeft;
        var end=index*Distance*(-1);
        var change=end-start;//偏移量
        var timer;
        var t=0;
        var maxT=30;
        clear();
        if(index==spanList.length){
            spanList[0].className="selected";
        }else{
            spanList[index].className="selected";
        }
        clearInterval(timer);
        timer=setInterval(function(){
            t++; if(t>=maxT){
                //当图片到达终点停止计时器 
                clearInterval(timer); 
                clickFlag=true;//当图片到达终点才能切换 
            } 
            inner.style.left=change/maxT*t+start+"px";//每个17毫秒让块移动 
            if(index==spanList.length&&t>=maxT){ 
                inner.style.left=0; index=0; //当图片到最后一张时把它瞬间切换回第一张，由于都同一张图片不会影响效果 
            }
        },17);
    }
    //编写图片向右滑动的函数 
    function forward(){ 
        index++; //当图片下标到最后一张把小标换0 
        if(index>spanList.length){ 
            index=0; } AutoGo(); 
        } //编写图片向左滑动函数 
        function backward(){ 
            index--; //当图片下标到第一张让它返回到倒数第二张， //left值要变到最后一张才不影响过渡效果 
            if(index<0){ 
                index=spanList.length-1; 
                inner.style.left=(index+1)*Distance*(-1)+"px"; 
            } 
            AutoGo(); 
        } //开启图片自动向右滑动的计时器 
        time=setInterval(forward,3000); //设置鼠标悬停动画停止 
        wrap.onmouseover=function(){ 
            clearInterval(time); 
        }
         wrap.onmouseout=function(){ 
            time=setInterval(forward,3000); 
        } //遍历每个按钮让其切换到对应图片 
        for(var i=0;i<spanList.length;i++){
             spanList[i].onclick=function(){ 
                 index=this.innerText-1; AutoGo(); 
                } 
            } //左切换事件 
            left.onclick=function(){ 
                if(clickFlag){ 
                    backward(); 
                } 
                clickFlag=false; 
            } //右切换事件 
            right.onclick=function(){ 
                if(clickFlag){ 
                    forward(); 
                } 
                clickFlag=false; 
            } //清除页面所有按钮状态颜色 
            function clear(){ 
                for(var i=0;i<spanList.length;i++){ 
                    spanList[i].className=""; 
                } 
} 