// PERGUNTAS DO JOGO //
//em uma futura atualização será criado um banco de dados em sqlite.
var question = [
   {
   "ask": "Qual linguagem de marcação?",
   "ques1":"php",
   "ques2":"flask",
   "ques3":"javascript",
   "ques4":"html",
   "ques5": "assembly",
   "correcly": 4
   },
   {
   "ask": "Como se declara uma variavel inteira?",
   "ques1":"int",
   "ques2":"doubledouble",
   "ques3":"bool",
   "ques4":"float",
   "ques5": "double",
   "correcly": 1
   },
   {
   "ask": "Quantos h1 devemos ter por página?",
   "ques1":"2",
   "ques2":"5",
   "ques3":"1",
   "ques4":"7",
   "ques5": "3",
   "correcly": 3
   },
   {
   "ask": "Quantos bytes tem um int?",
   "ques1":"4bytes",
   "ques2":"8bytes",
   "ques3":"16bytes",
   "ques4":"0byte",
   "ques5": "11bytes",
   "correcly": 1
   },
   {
   "ask": "O significa <= ?",
   "ques1":"igual",
   "ques2":"menor",
   "ques3":"diferente",
   "ques4":"idêntico",
   "ques5": "menor igual",
   "correcly": 5
   },
   {
   "ask": "A linguagem c é:",
   "ques1":"compilada",
   "ques2":"interpretativa",
   "ques3":"interpretada",
   "ques4":"matemática",
   "ques5": "comopilativa",
   "correcly": 1
   },
   {
   "ask": "o que != significa?:",
   "ques1":"igual",
   "ques2":"maior",
   "ques3":"idêntico",
   "ques4":"menor",
   "ques5": "diferente",
   "correcly": 5
   },
   {
   "ask": "Onde as variáveis ficam armazenadas?:",
   "ques1":"No software",
   "ques2":"No hd",
   "ques3":"No banco de dados",
   "ques4":"Na memória ram",
   "ques5": "no gabinete",
   "correcly": 4
   },
   {
   "ask": "O que a função malloc faz?:",
   "ques1":"aloca memória",
   "ques2":"exclui memóriaa",
   "ques3":"encerra o programa",
   "ques4":"aumenta a memória",
   "ques5":"cópia o endereço",
   "correcly": 1
   },
]
//---------  ----------//
//--------- DOCUMENTAÇÃO ----------//
//como uma forma de organizar o código adotei tres nomenclaturas.
//camelCase-> variáveis...
//snake_case-> funcões.
//UPPERCASE-> consts
//
//--------- VARIÁVEIS GLOBAIS ----------//
var score = 0;//pontos do jogo.
var max = question.length;//quantidade de perguntas.
var numbers = [max];//tamanho da lista.
var life = 3;//vidas do jogo.
var cron;//variável de tempo.
var ss = 0;//segundos.
var current = 0;//pergunta atual.
//
//--------- BOTOES DE RESPOSTA:a,b,c,d,e ----------//
//enviam a resposta do usuário para análise.
document.querySelector("#answer-a").addEventListener("click", () => {hit_question(1)});
document.querySelector("#answer-b").addEventListener("click", () => {hit_question(2)});
document.querySelector("#answer-c").addEventListener("click", () => {hit_question(3)});
document.querySelector("#answer-d").addEventListener("click", () => {hit_question(4)});
document.querySelector("#answer-e").addEventListener("click", () => {hit_question(5)});
//
//--------- ELEMENTO HTML BARRA DE TEMPO ----------//
//barra amarela representando um time de 20segundos para cada pergunta.
var time_var = document.querySelector("#js-barprogress");
//
//--------- FUNCÕES ----------//
function time()//muda a barra amarela dos 0% a 100%, representando 20segundos.
{
    if(ss < 100)
    {
        ss += 5;
        time_var.style.width = ss +'%';
    }
    else
    {
        hit_question(0)
    }
}
//
function start()//inicia o tempo de 1 em 1 segundo.
{
    cron = setInterval(()=>{time();},1000);
}
//
function stop()//reseta o tempo.
{
    clearInterval(cron);
    ss = 0;
    time_var.style.width = '0%';
}
//
function gameover()//vai mostrar gameover quando a vida chegar a 0.
{
    let on = 3;
    document.querySelector("#js-lifebar-"+life).style.display = "none";//retira visualmente do html o img da vida.
    life -= 1;//diminui 1 vida do usuário
    if(life == 0)
    {
        location.replace("../pages/gameOver.html","_self");//abre uma nova janela gameOver.
    }

}
//
function hit_question(q)//verifica se ouve acerto.
{
    if(q == question[newNumbers[current]].correcly)
    {
        let randomHit = Math.round(Math.random()*3);
        score += randomHit;
        document.querySelector("#js-score-points").innerHTML = score;
        alert("acertou!");
        stop();
    }
    else
    {
        alert("errou");
        gameover();
        stop();
    }
    current++;
    if(current == max)
    {
        location.replace("../pages/win.html", "_self");
    }
    change_question(newNumbers[current]);


}
//
function change_question(q)//muda a pergunta e as respostas.
{
    document.querySelector("#js-ask-text").innerHTML = ""+ question[q].ask;
    document.querySelector("#js-answer-a").innerHTML = ""+ question[q].ques1;
    document.querySelector("#js-answer-b").innerHTML = ""+ question[q].ques2;
    document.querySelector("#js-answer-c").innerHTML = ""+ question[q].ques3;
    document.querySelector("#js-answer-d").innerHTML = ""+ question[q].ques4;
    document.querySelector("#js-answer-e").innerHTML = ""+ question[q].ques5;
    start();
}
//
function getRandomNumber()//gera um número aleatório.
{
    //gera uma lista ordernada.
    for (let i = 0; i < max; i++)
    {
        if(i == max)
        {
            break;
        }
        numbers[i] = i;
        console.log(numbers[i]);
    }
    //gera uma lista aleatória.
    for (let i = 1; i < max;i++)
    {
      let number = Math.round(Math.random()*(max-1));//numero aleatório.
      let tmp = numbers[i];
      numbers[i] = numbers[number];
      numbers[number] = tmp;
    }
    return numbers;
}
//
var newNumbers = getRandomNumber();
///--------- CHAMADAS DE FUNCÃO ----------//
change_question(newNumbers[current]);
//
