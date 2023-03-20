let nombre = document.querySelector("#name");


nombre.addEventListener("blur",validar)

function validar(){
    console.log(nombre.validity.valueMissing)
    if(nombre.validity.valueMissing==false){
        document.querySelector("#error_name").parentElement.classList.remove("input-container")
    }else{
        console.log("El campo nombre no puede estar vacio")
        document.querySelector("#error_name").parentElement.classList.add("input-container")
        document.querySelector("#error_name").innerHTML = "El campo nombre no puede estar vacio"
    }

    // if(nombre.validity.patternMismatch==false){
    //     document.querySelector("#error_name").parentElement.classList.remove("input-container")
    // }else{
    //     console.log("El campo nombre no puede estar vacio")
    //     document.querySelector("#error_name").parentElement.classList.add("input-container")
    //     document.querySelector("#error_name").innerHTML = "El campo nombre debe contener máximo 50 caracteres"
    // }
}
