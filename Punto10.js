
var A = prompt("Ingrese Una Frase");
var B = A.length;

for (i = 0; i < B; i++) {
    if (A.substr(i,1) == "A" || A.substr(i,1) == "E" || A.substr(i,1) == "I" || A.substr(i,1) == "O" || A.substr(i,1) == "U" || A.substr(i,1) == "a" || A.substr(i,1) == "e" || A.substr(i,1) == "i" || A.substr(i,1) == "o" || A.substr(i,1) == "u"){ 
        document.writeln("<br/> En La Frase Ingresada Se Encuentran La Siguiente Vocal: "+A.substr(i,1)); 
    }
}