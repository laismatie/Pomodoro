var contagem = 0;
var segundos = 0;
var minutos = 25;
var minutosAlterado=25;

function timer(minutos, segundos){
    total();
    document.getElementById("intervaloLongo").disabled = true; 

    document.getElementById('menos').addEventListener('click', function(){
        if(minutos==0){
            document.getElementById("mensagem").innerHTML = "Não pode ser menor que 0.";
            minutos=0;
        }else if (minutos>0){
            minutos--;
            minutosAlterado--;
        }
        setTimer(minutos,segundos);
    });

    document.getElementById('mais').addEventListener('click', function(){
        minutos++;
        setTimer(minutos,segundos);
        minutosAlterado++;
    });

    setTimer(minutos,segundos);
   
}

function iniciar(){
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("menos").disabled = true; 
    document.getElementById("mais").disabled = true; 
    iniciarTimer(minutosAlterado-1,59);
    contagem++;
}

function intervalo(){
    minutos = 5;
    segundos = 0;
    setTimer(minutos,segundos);
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("menos").disabled = true; 
    document.getElementById("mais").disabled = true;  
    iniciarTimer(minutos-1, 59); 
}

function intervaloLongo(){
    minutos = 10;
    segundos = 0;
    setTimer(minutos,segundos);
    document.getElementById("intervaloLongo").disabled = true; 
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("menos").disabled = true; 
    document.getElementById("mais").disabled = true;  
    iniciarTimer(minutos-1, 59); 
}

function total(){
    document.getElementById("contagem").innerHTML = `Total de sessões: ${contagem}`;
}

function iniciarTimer(minutos, segundos){

    document.getElementById("mensagem").innerHTML = "";

    setTimer(minutos,segundos);

    var intervalo_minutos = setInterval(minutoTimer, 60000);
    var intervalo_segundos = setInterval(segundoTimer, 1000);

    /**
     * Pause
     */

    document.getElementById('pause').addEventListener('click', function(){
        document.getElementById('pause').innerText="Continuar";
        document.getElementById('pause').style.backgroundColor= "#ddd";
        document.getElementById("intervalo").disabled = true; 
        document.getElementById("iniciar").disabled = true; 
        limparIntervalo(intervalo_minutos, intervalo_segundos);
    });

    document.getElementById('pause').addEventListener('dblclick', function(){
        document.getElementById('pause').innerText="Pause";
        document.getElementById('pause').style.backgroundColor= "lightcoral";
        document.getElementById("intervalo").disabled = true; 
        document.getElementById("iniciar").disabled = true; 
        iniciarTimer(minutos, segundos);
    });
        
    function minutoTimer(){
        minutos = minutos-1;
        setTimer(minutos,segundos);
    }
        
    function segundoTimer(){
        setTimer(minutos,segundos);
        segundos--;
        if(segundos <= 0){
            if(minutos <= 0){
                limparIntervalo(intervalo_minutos, intervalo_segundos);
    
                alarme();
                total();
                                        
                document.getElementById("mensagem").innerHTML = "Alarme";

                document.getElementById("intervalo").disabled = false; 
                document.getElementById("iniciar").disabled = false; 
                document.getElementById("menos").disabled = false; 
                document.getElementById("mais").disabled = false;  
                
                if(contagem >= 4){
                    document.getElementById("intervaloLongo").disabled = false; 
                    document.getElementById("mensagem").innerHTML = "Você pode descansar por 10 minutos.";
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
    var snd = new Audio("../alarm.mp3");
    snd.play();
}

function setTimer(minutos, segundos) {
    document.getElementById("minutos").innerHTML = minutos<10 ? `0${minutos}` : `${minutos}`;
    document.getElementById("segundos").innerHTML = segundos<10 ? `0${segundos}` : `${segundos}`;
}