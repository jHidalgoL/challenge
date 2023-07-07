  
    function encriptar() {
        let arreglo=[];
        const t1=document.getElementById("texto").value;
        arreglo=t1.split("")
       for (let i = 0; i < arreglo.length; i++) {
        switch (arreglo[i]) {
                case "e":
                    arreglo[i] = "enter";
                    break;
                case "i":
                    arreglo[i] = "imes";
                    break;
                case "a":
                    arreglo[i] = "ai";
                    break;
                case "o":
                    arreglo[i] = "ober";
                    break;
                case "u":
                    arreglo[i] = "ufat";
                    break;
            }
   
      
       }
       let frase=arreglo.join("")
        console.log(frase); 
        document.getElementById("respuesta").innerHTML=frase;
       }

       function desencriptar() {
        let arreglo2=[]
        const t=document.getElementById("texto").value;
        arreglo2=t.split("")
        let frase2=arreglo2.join("")
        

        for (let i = 0; i < frase2.length; i++) {
            frase2=frase2.replaceAll('enter','e')
            frase2=frase2.replaceAll('imes','i')
            frase2=frase2.replaceAll('ai','a')
            frase2=frase2.replaceAll('ober','o')
            frase2=frase2.replaceAll('ufat','u')
            frasetotal=(frase2)
          
        }
        console.log(frasetotal);
        document.getElementById("respuesta").innerHTML=frasetotal;
       }
      
     function quitarImagenYtexto() {
        document.getElementById('imagen-principal').style.display='none';
        document.getElementById('texto1').style.display='none';
        document.getElementById('texto2').style.display='none';
        document.getElementById('texto3').style.display='block';
      
     }

     function copiarTexto() {
        var elemento = document.getElementById("respuesta");
        var areaTemporal = document.createElement("textarea");
        areaTemporal.value = elemento.textContent;
        document.body.appendChild(areaTemporal);
        areaTemporal.select();
        document.execCommand("copy");
        document.body.removeChild(areaTemporal);
     }
        
    