var minutos = 25;
var segundos = "00";


function timer(){
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}

function iniciar(){

    minutos = 24;
    segundos = 59;

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

                document.getElementById("mensagem").innerHTML = "Clique em iniciar e descanse por 5 minutos.";

            }
            segundos = 60;
        }
    }
}
