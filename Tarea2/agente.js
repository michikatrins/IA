var estado= 1;
var estados = ["A","DIRTY","DIRTY"];
test(estados);

function reflex_agent(location, state){
   	if (state=="DIRTY"){
        return "CLEAN";
    } 
   	else if (location=="A"){
        return "RIGHT";
    } 
   	else if (location=="B"){
        return "LEFT";
    }
}

function test(estados){
         
         var ciclo = true;

         
         //revisión que los 8 estados se hayan cumplido
         if (estados[1]=="CLEAN"){
            if(estados[2]=="CLEAN"){ 
                if(estado > 7){
                    ciclo = false;
                }
            }
         }
         else if(estados[1]=="CLEAN"){
            if(estados[2]=="CLEAN"){
                if(estado == 4){
                    estados[1]="DIRTY";
                }
            }
         }
         else if(estados[1]=="CLEAN"){
             if(estados[2]=="CLEAN"){
                if(estado == 6){
                    estados[2]="DIRTY"
                }
            }
         }
         else if(estados[1]=="CLEAN"){
             if(estados[2]=="DIRTY"){
                 if(estado == 7){
                    estados[1]="DIRTY";
                 }
            }
         }

      	var location = estados[0];		
      	var state = estados[0] == "A" ? estados[1] : estados[2];
      	var action_result = reflex_agent(location, state);
        document.getElementById("presentar").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A"){
                estados[1] = "CLEAN";
            } 
         	else if (location == "B") {
                 estados[2] = "CLEAN";
            }
      	}
      	else if (action_result == "RIGHT"){
              estados[0] = "B";
        }
      	else if (action_result == "LEFT"){
            estados[0] = "A";	
            estado = estado + 1;
        }
   //Si el ciclo se cumple se termina la ejecución
	if(ciclo){
      setTimeout(function(){ test(estados) }, 3000);
   }
   else{
      document.getElementById("log").innerHTML+="<br>Visito los 8 estados";
   }
}

