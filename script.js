function convertFahrenheit() {
    let celsius = document.getElementById('temp').value;
   
// replace = trocar um item por outro, nesse caso vai trocar o '.' pela ','
   let fahrenheit = (1.8 * celsius + 32).toFixed(2).replace('.' , ',');
 
    let textoresultado = 'A temperatura ' + celsius + ' °C para fahrenheit é: ' + fahrenheit +' F';
    console.log(textoresultado);
    
    // aqui em baixo estou incluindo o texto dentro da tag <p> do html de forma automatica. 
    document.getElementsByTagName('p')[0].innerHTML = textoresultado;
}

// converter fahreineit para celsius
function convertCelsius() {
    let fahrenheit = document.getElementById('temp').value;
   

   let celsius = ((fahrenheit - 32) *5/9).toFixed(2).replace('.' , ',');
 
    let textoresultado2 = 'A temperatura ' + fahrenheit + ' F para Celsius é: ' + celsius +' °C';
    console.log(textoresultado2);
     
    document.getElementsByTagName('p')[0].innerHTML = textoresultado2;
}

// botao para limpar todas informações

function limpaTudo() {
    document.getElementsByTagName('p')[0].innerHTML = '';
}








    // console.log('A temperatura ' + celsius + ' °C é: ' + fahrenheit +' °F');


    // alert(celsius);

