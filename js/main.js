var contagem = 0;
var minutosAtualizado = 0;
var minutos = 25;
var segundos = 0;

function timer(minutos, segundos){

    document.getElementById("intervaloLongo").disabled = true; 
    let min = minutos;
    let seg = segundos
    document.getElementById("minutos").innerHTML = min;
    document.getElementById("segundos").innerHTML = `0${seg}`;

    document.getElementById('mais').addEventListener('click', function(){
        minutos++;
        document.getElementById("minutos").innerHTML = minutos;
        minutosAtualizado = minutos;
    });
    document.getElementById('menos').addEventListener('click', function(){
        minutos--;
        document.getElementById("minutos").innerHTML = minutos;
        minutosAtualizado = minutos;
    });
}

function iniciar(){
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true;  
    iniciarTimer(minutosAtualizado, 5); 
    contagem++;
}

function intervalo(){
    minutos = 5;
    segundos = 0;
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    timer(minutos, segundos); 
    iniciarTimer(4, 59); 
    total();
}

function intervaloLongo(){
    minutos = 10;
    segundos = 0;
    document.getElementById("intervaloLongo").disabled = true; 
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    timer(minutos, segundos); 
    iniciarTimer(9, 59); 
    total();
}

function total(){
    document.getElementById("contagem").innerHTML = `Total de sessões: ${contagem}`;
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

    document.getElementById('reiniciar').addEventListener('click', function(){
        document.getElementById("intervalo").disabled = true; 
        document.getElementById("iniciar").disabled = true; 
        limparIntervalo(intervalo_minutos, intervalo_segundos);
        timer(minutosAtualizado, 0);
        document.getElementById("intervalo").disabled = false; 
        document.getElementById("iniciar").disabled = false; 
    });
        
    function minutoTimer(){
        minutos--;
        if(minutos<10){
            document.getElementById("minutos").innerHTML = `0${minutos}`;
        }else{
            document.getElementById("minutos").innerHTML = minutos;
        }
    }
        
    function segundoTimer(){
        segundos--;
        if(segundos<10){
            document.getElementById("segundos").innerHTML = `0${segundos}`;
        }else{
            document.getElementById("segundos").innerHTML = segundos;
        }
    
        if(segundos <= 0){
            if(minutos <= 0){
                limparIntervalo(intervalo_minutos, intervalo_segundos);
    
                alarme();
                total();
                                        
                document.getElementById("mensagem").innerHTML = "Alarme";

                document.getElementById("intervalo").disabled = false; 
                document.getElementById("iniciar").disabled = false;  
                
                if(contagem >= 4){
                    document.getElementById("intervaloLongo").disabled = false; 
                }
    
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
