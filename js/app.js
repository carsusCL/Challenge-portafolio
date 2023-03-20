import { valida } from "./validacion.js";
import { validaTextarea } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

inputs.forEach(input => {
    input.addEventListener("blur", (input)=>{
        valida(input.target)
    })
})

textarea.addEventListener("blur", (textA)=>{
    validaTextarea(textA.target)
})