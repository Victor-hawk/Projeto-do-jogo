//--------- VARIÁVEIS ----------//
var current = 5;
var start_game = window.setInterval(function(){
//
document.querySelector("#js-time-start").innerHTML = ""+current;//número da contagem
current--;
if(current == 0)
{
    clearInterval(start_game);//para o time.
    location.replace("../pages/game.html","_self");//abre o arquivo do jogo
}
},1000);
