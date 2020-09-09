
var A = parseInt(prompt("Ingrese Un Numero")); 
var B = parseInt(prompt("Ingrese Un Segundo Numero")); 
var C = parseInt(prompt("Ingrese Un Tercer Numero")); 

if(A>=B && B>=C){
    alert("El Numero Mayor Es: "+A);
}else if(A>=C && C>=B){
    alert("El Numero Mayor Es: "+A);
}else if(B>=A && A>=C){
    alert("El Numero Mayor Es: "+B);
}else if(B>=C && C>=A){
    alert("El Numero Mayor Es: "+B);
}else if(C>=A && A>=B){
    alert("El Numero Mayor Es: "+C);
}else if(C>=B && B>=A){
    alert("El Numero Mayor Es: "+C);
}else if(A==B && A==C){
    alert("El Numero Mayor Es: "+A);
}