function triangulo(){
  
    let base=Number(document.getElementById('B').value);
  
    let altura=Number(document.getElementById('H').value);
  
    let res=(base*altura)/2;
  
    document.getElementById('A').value=res;
  
  }