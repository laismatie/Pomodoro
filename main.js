var minutos = 25;
var segundos = 0;
var contagem = 0;


function timer(){
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = `0${segundos}`;
}

function atualizaTimer(){

}

function iniciar(){
    iniciarTimer(0,5); 
    contagem++;
    total();
}

function intervalo(){
    iniciarTimer(0,2); 
    total();
}

function reiniciar(){
    iniciarTimer(0,4); 
    total();
}

function zerar(){
    contagem = 0;
    document.getElementById("mensagem").innerHTML = "Você zerou a contagem";
    total();
}

function total(){
    document.getElementById("contagem").innerHTML = `Total de pomodoros: ${contagem}`;
}

function iniciarTimer(minutos, segundos){

    document.getElementById("mensagem").innerHTML = "";

    if(minutos<10){
        document.getElementById("minutos").innerHTML = `0${minutos}`;
    }else{
        document.getElementById("minutos").innerHTML = minutos;
    }
    
    document.getElementById("segundos").innerHTML = segundos;

    var intervalo_minutos = setInterval(minutoTimer, 60000);
    var intervalo_segundos = setInterval(segundoTimer, 1000);
        
    function minutoTimer(){
        minutos += -1;
        if(minutos<10){
            document.getElementById("minutos").innerHTML = `0${minutos}`;
        }else{
            document.getElementById("minutos").innerHTML = minutos;
        }
    }
        
    function segundoTimer(){
        segundos += -1;
        if(segundos<10){
            document.getElementById("segundos").innerHTML = `0${segundos}`;
        }else{
            document.getElementById("segundos").innerHTML = segundos;
        }
    
        if(segundos == 0){
            if(minutos == 0){
                limparIntervalo(intervalo_minutos, intervalo_segundos);
    
                alarme();
                                        
                document.getElementById("mensagem").innerHTML = "Alarme";
    
            }
            segundos = 60;
            }
        }
}

function limparIntervalo(intervalo_minutos,intervalo_segundos){
    clearInterval(intervalo_minutos);
    clearInterval(intervalo_segundos);
}

function alarme() {
    var snd = new Audio("./alarme.mp3");
    snd.play();
}