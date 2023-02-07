function convertFahrenheit() {
    let celsius = document.getElementById('celsius').value;
   
// replace = trocar um item por outro, nesse caso vai trocar o '.' pela ','
   let fahrenheit = (1.8 * celsius + 32).toFixed(2).replace('.' , ',');
 

    let textoresultado = 'A temperatura ' + celsius + ' °C é: ' + fahrenheit +' °F';
    
    // aqui em baixo estou incluindo o texto dentro da tag <p> do html de forma automatica. 
    document.getElementsByTagName('p')[0].innerHTML = textoresultado;
}

function limpaTudo() {
    document.getElementsByTagName('p')[0].innerHTML = '';
}








    // console.log('A temperatura ' + celsius + ' °C é: ' + fahrenheit +' °F');


    // alert(celsius);

