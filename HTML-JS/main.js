const form = document.getElementById('form-testar');


form.addEventListener("submit", function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('campo-a').value);
const numeroB = parseFloat (document.getElementById('campo-b').value);


function comparaNumero(numeroA, numeroB){
    if (numeroB > numeroA){
        alert('Formulário válido: Valor de B é maior que A');
        return true;    

    } else if(numeroB == numeroA){
        alert('Erro: Valor de a é igual B');
        return false;    


    } else {
    alert('Erro: Valor de A é maior que B');
    return false;
    }

    
}
form.reset ();
formEValido = comparaNumero(numeroA, numeroB);
    
});




 
