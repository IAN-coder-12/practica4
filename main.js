const botones = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const btnSeleccionado = boton.textContent;
        //Limpiar pantalla
        if(btnSeleccionado === "C"){
            display.value = "0";
            return;
        }
        //Borrar numeros
        if(btnSeleccionado === "←"){
            if(display.value < 10 || display.value === "Error"){
                display.value = "0";
                return;
            }else{
                display.value = display.value.slice(0,-1);
            }
            return;
           
        }
         //Operaciones
         if(btnSeleccionado === "=" || event.key === 'Enter'){
            try{
                display.value = eval(display.value);
            }catch{
                display.value = "Error";
            }
            return;
        }


        //Pintar numeros en pantalla
        if(display.value == "0" || display.value === "Error"){
            display.value = btnSeleccionado;
            console.log(btnSeleccionado)
        }else{
            display.value += btnSeleccionado;
            console.log(btnSeleccionado)
        }
       


    })
})