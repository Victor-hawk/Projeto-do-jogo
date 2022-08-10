

//DECLARAÇÃO DE VARIÁVEIS GLOBAIS
var score = 0;
var life = 3;
var cron;
var ss = 0;
var current = 0;//numeros de questions
//BOTOES DA REPOSTA, RETORNA O VALOR DA REPOSTA
document.querySelector("#answer-a").addEventListener("click", () => {hitQ(1)});
document.querySelector("#answer-b").addEventListener("click", () => {hitQ(2)});
document.querySelector("#answer-c").addEventListener("click", () => {hitQ(3)});
document.querySelector("#answer-d").addEventListener("click", () => {hitQ(4)});
document.querySelector("#answer-e").addEventListener("click", () => {hitQ(5)});


//var gameDisplay = document.querySelector(".l-game");
//var retry = document.querySelector(".over-continue");
//Tempo
var time_var = document.querySelector("#js-barprogress");
//FUNCTIONS
//score
function time()
{
    if(ss < 100)
    {
        ss += 5;
        time_var.style.width = ss +'%';
    }
    else
    {
        gameover();
    }



}
function start()
{
    cron = setInterval(()=>{time();},1000);
}
function stop()
{
    clearInterval(cron);
    ss = 0;
    time_var.style.width = '0%';
}
function gameover()//vai mostrar gameover quando a vida chegar a 0;
{
    let on = 3;
    document.querySelector("#js-lifebar-"+life).style.display = "none";
    life -= 1;
    //alert("perdeu uma vida!");
    //let off = 1;
    if(life == 0)
    {
        location.replace("../pages/gameOver.html","_self");
    }

}
function hitQ(q)//verifica se ouve acerto
{


    if(q == question[current].correcly)
    {
        score += 3;
        document.querySelector("#js-score-points").innerHTML = score;
        //alert("acertou!");
        stop();
    }
    else
    {
        //alert("errou");
        gameover();
        stop();
    }
    if(current == 5)
    {
        //alert("vocẽ ganhou!!!");
    }
    current = current+1;
    changeQ(current);

}
function changeQ(q)//muda a pergunta e as respostas
{
    document.querySelector("#js-ask-text").innerHTML = ""+ question[q].ask;
    document.querySelector("#js-answer-a").innerHTML = ""+ question[q].ques1;
    document.querySelector("#js-answer-b").innerHTML = ""+ question[q].ques2;
    document.querySelector("#js-answer-c").innerHTML = ""+ question[q].ques3;
    document.querySelector("#js-answer-d").innerHTML = ""+ question[q].ques4;
    document.querySelector("#js-answer-e").innerHTML = ""+ question[q].ques5;
    start();
}



//PERGUNTAS
 var question = [
    {
    "ask": "qual linguagem de marcação?",
    "ques1":"php",
    "ques2":"flask",
    "ques3":"javascript",
    "ques4":"html",
    "ques5": "assembly",
    "correcly": 4
    },
    {
    "ask": "como se declara uma variavel inteira?",
    "ques1":"int",
    "ques2":"doubledouble",
    "ques3":"bool",
    "ques4":"float",
    "ques5": "double",
    "correcly": 1
    },
    {
    "ask": "quantos h1 devemos ter por página?",
    "ques1":"2",
    "ques2":"5",
    "ques3":"1",
    "ques4":"7",
    "ques5": "3",
    "correcly": 3
    },
    {
    "ask": "quantos bytes tem um int?",
    "ques1":"4bytes",
    "ques2":"8bytes",
    "ques3":"16bytes",
    "ques4":"0byte",
    "ques5": "11bytes",
    "correcly": 1
    },
    {
    "ask": "o significa <= ?",
    "ques1":"igual",
    "ques2":"menor",
    "ques3":"diferente",
    "ques4":"idêntico",
    "ques5": "menor igual",
    "correcly": 5
    },
    {
    "ask": "a linguagem c é:",
    "ques1":"compilada",
    "ques2":"interpretativa",
    "ques3":"interpretada",
    "ques4":"matemática",
    "ques5": "comopilativa",
    "correcly": 1
    },
]

changeQ(current);



//alert("" + question[1].ask);
