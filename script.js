function agregar(value) {
    document.getElementById('pantalla').value+=value;
}


function borrar() {
    document.getElementById('pantalla').value='';
}


function calculate() {
    let resultado = eval(document.getElementById('pantalla').value);
    
    document.getElementById('pantalla').value=resultado;
}