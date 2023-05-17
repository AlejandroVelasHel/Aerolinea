const formulario= document.querySelector('#form');

    formulario.addEventListener('submit',(validar) => {
        validar.preventDefault();
        var salida = new Date(document.querySelector('#salida').value);
        var regreso = new Date(document.querySelector('#regreso').value);
        let fecha = new Date();

        if (salida < fecha|| regreso <salida) {
            alert('Fecha ingresada invalida')
            alert('Verifica que las fechas esten bien')
        }else{
            alert('Viaje registrado con exito')
        }
    });