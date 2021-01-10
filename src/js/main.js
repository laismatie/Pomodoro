var contagem = 0;

var minutosAlterado=25;

function timer(minutos, segundos){
    document.getElementById("intervaloLongo").disabled = true; 
    let min = minutos;
    let seg = segundos

    document.getElementById('menos').addEventListener('click', function(){
        if(min==0){
            document.getElementById("mensagem").innerHTML = "Não pode ser menor que 0.";
            min=0;
        }else if (min>0){
            min--;
            minutosAlterado--;
        }
        setTimer(min,seg);
    });

    document.getElementById('mais').addEventListener('click', function(){
        min++;
        setTimer(min,seg);
        minutosAlterado++;
        console.log(min);
    });

    setTimer(min,seg);
   
}

function iniciar(){
    document.getElementById("intervalo").disabled = true; 
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("menos").disabled = true; 
    document.getElementById("mais").disabled = true; 
    iniciarTimer(minutosAlterado,0)
    contagem++;
}

function intervalo(){
    minutos = 5;
    segundos = 0;
    document.getElementById("intervalo").disabled = true; 
    //document.getElementById("iniciar").disabled = true;  
    iniciarTimer(minutos, segundos); 
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

    setTimer(minutos,segundos);

    var intervalo_minutos = setInterval(minutoTimer, 60000);
    var intervalo_segundos = setInterval(segundoTimer, 1000);

    document.getElementById('reiniciar').addEventListener('click', function(){
        document.getElementById("intervalo").disabled = true; 
        document.getElementById("iniciar").disabled = true; 
        limparIntervalo(intervalo_minutos, intervalo_segundos);
        iniciar(minutosAlterado, 0);
    });

    document.getElementById('pause').addEventListener('click', function(){
        document.getElementById('pause').innerText="Continuar";
        document.getElementById('pause').style.backgroundColor= "#ddd";
        document.getElementById("intervalo").disabled = true; 
        document.getElementById("iniciar").disabled = true; 
        limparIntervalo(intervalo_minutos, intervalo_segundos);
    });

    document.getElementById('pause').addEventListener('dblclick', function(){
        document.getElementById('pause').innerText="Pause";
        document.getElementById('pause').style.backgroundColor= "#lightcoral";
        document.getElementById("intervalo").disabled = true; 
        document.getElementById("iniciar").disabled = true; 
        iniciarTimer(minutos, segundos);
    });
        
    function minutoTimer(){
        minutos--;
        setTimer(minutos,segundos);
    }
        
    function segundoTimer(){
        setTimer(minutos,segundos);
        segundos--;
        if(segundos < 0){
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
                    document.getElementById("mensagem").innerHTML = "Descanse por 10 minutos.";
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
    document.getElementById("minutos").innerHTML = minutos<=0 ? `0${minutos}` : `${minutos}`;
    document.getElementById("segundos").innerHTML = segundos<=0 ? `0${segundos}` : `${segundos}`;
}