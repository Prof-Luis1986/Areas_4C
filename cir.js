function circulo(){

    const pi=3.1416;
    
    let radio=Number(document.getElementById('R').value);
    
    let res=pi*(radio*radio);
    
    document.getElementById('A').value=res;
    
    }