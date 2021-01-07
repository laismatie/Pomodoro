var contagem = 0;
var minutosAtualizado = 0;

function timer(minutos, segundos){
    document.getElementById("intervaloLongo").disabled = true; 
    let min = minutos;
    let seg = segundos
    document.getElementById("minutos").innerHTML = min;
    document.getElementById("segundos").innerHTML = `0${seg}`;

    document.getElementById('mais').addEventListener('click', function(){
        minutos += 1
        document.getElementById("minutos").innerHTML = minutos;
        minutosAtualizado = minutos;
    });
    document.getElementById('menos').addEventListener('click', function(){
        minutos -= 1
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
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("reiniciar").disabled = true; 
    iniciarTimer(0,2); 
    total();
}

function reiniciar(){
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    iniciarTimer(0,4); 
    total();
}

function intervaloLongo(){
    document.getElementById("intervaloLongo").disabled = true; 
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("reiniciar").disabled = true; 
    iniciarTimer(0,10); 
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

