export function valida(input){
    const tipoDeInput = input.dataset.tipo
    // if(validadores[tipoDeInput]) {
    //     validadores[tipoDeInput](input)
    // }
    console.log(input.parentElement)
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container")
        input.parentElement.querySelector(".formcontato__span").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container")
        input.parentElement.querySelector(".formcontato__span").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

export function validaTextarea(textarea){
    const tipoDeInput = textarea.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](textarea)
    }
    console.log(textarea.parentElement)

    if(textarea.validity.valid){
        textarea.parentElement.classList.remove("input-container")
        textarea.parentElement.querySelector(".formcontato__span").innerHTML = ""
    }else{
        textarea.parentElement.classList.add("input-container")
        textarea.parentElement.querySelector(".formcontato__span").innerHTML = mostrarMensajeDeError(tipoDeInput, textarea)
    }

}



const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "El nombre debe tener maximo 50 caracteres"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "El nombre debe tener maximo 50 caracteres"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        customError: "El mensaje debe contener maximo 300 caracteres"
    },
}

const validadores = {
    mensaje: (textarea) => validarTextarea(textarea)
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]



function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error)
            console.log(input.validity[error])
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}


function validarTextarea(textarea){
    const longitudTexto = textarea.parentElement.querySelector("textarea").value.length;
    console.log(longitudTexto)
    let mensaje = ""
    if (longitudTexto > 300){
        mensaje = "El mensaje debe contener maximo 300 caracteres"
    };

    textarea.setCustomValidity(mensaje)
};

// function mayorDeEdad(fecha){
//     const fechaActual = new Date();
//     const diferenciaFechas = new Date(
//         fecha.getUTCFullYear() + 18, 
//         fecha.getUTCMonth(), 
//         fecha.getUTCDate()
//         );
//     return(diferenciaFechas <= fechaActual);
// };



