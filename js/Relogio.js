
var minutosAtualizado = 0;
var contagem = 0;

export default class Relogio{
    constructor(minutos, segundos){
        this.minutos = minutos;
        this.segundos = segundos;
        this.$ = document.querySelector.bind(document);
    }

    timer(){

        this.$("minutos").innerText = this.minutos;
        this.$("segundos").innerText = `0${this.segundos}`;
    
        this.$('mais').addEventListener('click', function(){
            this.minutos += 1
            this.$("minutos").innerText = this.minutos;
            minutosAtualizado = minutos;
        });
        this.$('menos').addEventListener('click', function(){
            this.minutos -= 1
            this.$("minutos").innerText = this.minutos;
            minutosAtualizado = this.minutos;
        });
    }
    
    iniciarTimer(){

        this.$("mensagem").innerText = "";
    
        if(this.minutos<10){
            this.$("minutos").innerText = `0${this.minutos}`;
        }else{
            this.$("minutos").innerText = this.minutos;
        }
        
        this.$("segundos").innerText = this.segundos;
    
        var intervalo_minutos = setInterval(minutoTimer, 60000);
        var intervalo_segundos = setInterval(segundoTimer, 1000);
            
        function minutoTimer(){
            this.minutos += -1;
            if(this.minutos<10){
                this.$("minutos").innerText = `0${this.minutos}`;
            }else{
                this.$("minutos").innerText = this.minutos;
            }
        }
            
        function segundoTimer(){
            this.segundos += -1;
            if(this.segundos<10){
                this.$("segundos").innerText = `0${this.segundos}`;
            }else{
                this.$("segundos").innerText = this.segundos;
            }
        
            if(this.segundos <= 0){
                if(this.minutos <= 0){
                    limparIntervalo(intervalo_minutos, intervalo_segundos);
        
                    alarme();
                    total();
                                            
                    this.$("mensagem").innerText = "Alarme";
    
                    this.$("intervalo").disabled = false; 
                    this.$("iniciar").disabled = false;  
                    
                    if(contagem >= 4){
                        this.$("intervaloLongo").disabled = false; 
                    }
        
                }
                segundos = 60;
                }
            }
    }
}