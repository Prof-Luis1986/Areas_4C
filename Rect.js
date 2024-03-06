function rectangulo(){
    //Se pide el valor de la base
    let base=Number(document.getElementById('B').value);
  
    let altura=Number(document.getElementById('H').value);
  
    let res=base*altura;
  
    document.getElementById('A').value=res;
}