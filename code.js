//WTF this not wrking var score=document.getElementById('score').innerHTML;
scorejs=0;
var p;

document.getElementById("start").onclick=function s(){
    window.alert('Your initial score : 0 \nIn the game,you have to click on the number which came by the multiplication of two numbers shown,\n+1 for each correct answer\n-1 for each wrong answer\n');
    var totaltime=prompt('Enter time duration for which you want to play in seconds');
    totaltime=Math.round(totaltime);
    scorejs=0;
    document.getElementById('score').innerHTML=scorejs;
    game();
    document.getElementById('start').innerHTML='Reset Game';
    var time=totaltime;
    function timefun()
    {    
    time-=1;    
    document.getElementById('time').innerHTML= 'Time Remaining: '+time;
    
    } 
    //var counter=setInterval('timefun()','1000');not wrking whyyy
    var counter=setInterval(timefun,'1000')
    document.getElementById("start").onclick=function(){
        window.alert('Game Over\nYour Score is '+scorejs);
        location.reload();

    }
    function over(){
        window.alert('Game Over\nYour Score is '+scorejs);
        location.reload();
    }
    setTimeout(over,totaltime+'000');
}


function game(){
    
    
    x=Math.floor(1+(Math.random()*9));
    y=Math.floor(1+(Math.random()*9));
    ans=x*y;
    ansbutton=Math.floor(1+(Math.random()*4));
    
    function randonansgenerator(){
    rand=Math.floor(1+(Math.random()*99));
    while(rand==ans)
    {
        rand=Math.floor(1+(Math.random()*99));
    }
    return rand;
    }
    document.getElementById('question').innerHTML=x+'x'+y;
    document.getElementById('button'+ansbutton).innerHTML=ans;
    for(i=1;i<5;i++)
    {
        if(i!=ansbutton)
        document.getElementById('button'+i).innerHTML=randonansgenerator();
    }
    document.getElementById('button'+ansbutton).onclick=function(){
        scorejs=scorejs+1;
        document.getElementById('score').innerHTML=scorejs;
        
        document.getElementById('correct').style.backgroundColor='greenyellow';
        document.getElementById('correct').innerHTML='Correct ! <br> +1';
        function dialog(){
            document.getElementById('correct').innerHTML='';
        }
        setTimeout(dialog,500);
        p=1;
        return game();
        
        
        
    }
    // if(p==1)
    // {
    //     return;
    // }
    for(i=1;i<5;i++)
    {
        if(i!=ansbutton){
            document.getElementById('button'+i).onclick=function(){
            scorejs-=1;
            document.getElementById('score').innerHTML=scorejs;
            document.getElementById('correct').style.backgroundColor='red';
            document.getElementById('correct').innerHTML='Incorrect ! <br> -1';
            function dialog(){
                document.getElementById('correct').innerHTML='';
            }
            setTimeout(dialog,500);
            p=1;
            
            return game();
            }
        }
    }
   


      
}