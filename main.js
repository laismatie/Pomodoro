var minutos = 25;
var segundos = "00";
var contagem = 0;


function timer(){
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}

function iniciar(){

    document.getElementById("mensagem").innerHTML = "";

    minutos = 0;
    segundos = 4;

    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
    
    var intervalo_minutos = setInterval(minutoTimer, 60000);
    var intervalo_segundos = setInterval(segundoTimer, 1000);


    function minutoTimer(){
        minutos += -1;
        document.getElementById("minutos").innerHTML = minutos;
    }

    function segundoTimer(){
        segundos += -1;
        document.getElementById("segundos").innerHTML = segundos;

        if(segundos == 0){
            if(minutos == 0){
                clearInterval(intervalo_minutos);
                clearInterval(intervalo_segundos);

                alarme();
                
                contagem++;
                total();
                
                document.getElementById("mensagem").innerHTML = "Clique em intervalo e descanse por 5 minutos ou inicie uma nova contagem.";

            }
            segundos = 60;
        }
    }
     
}

function alarme() {
    var snd = new Audio("./alarme.mp3");
    snd.play();
}

function intervalo(){

    document.getElementById("mensagem").innerHTML = "";

    minutos = 0;
    segundos = 3;

    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
    
    var intervalo_minutos = setInterval(minutoTimer, 60000);
    var intervalo_segundos = setInterval(segundoTimer, 1000);


    function minutoTimer(){
        minutos += -1;
        document.getElementById("minutos").innerHTML = minutos;
    }

    function segundoTimer(){
        segundos += -1;
        document.getElementById("segundos").innerHTML = segundos;

        if(segundos == 0){
            if(minutos == 0){
                clearInterval(intervalo_minutos);
                clearInterval(intervalo_segundos);

                alarme();

                document.getElementById("mensagem").innerHTML = "Fim do intervalo, clique em iniciar para começar um novo pomodori";
            }
            segundos = 60;
        }
    }
}

function reiniciar(){
    iniciar();
}

function zerar(){
    contagem = 0;
    total();
}

function total(){
    document.getElementById("contagem").innerHTML = `Total de pomodoros: ${contagem}`;
}