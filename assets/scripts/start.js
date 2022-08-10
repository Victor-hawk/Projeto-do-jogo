var current = 0;

var start_game = window.setInterval(function(){
document.querySelector("#js-time-start").innerHTML = ""+current;
current++;
if(current == 6)
{
    clearInterval(start_game);
    location.replace("../pages/game.html","_self");
}
},1000);
