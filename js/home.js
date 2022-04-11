const $form = document.querySelector('#form-contacto');
const $buttonMailto = document.querySelector('#mailCta');
const inputNombre = document.querySelector('#contactoNombre');
const inputEmail = document.querySelector('#contactoEmail');
const inputAsunto = document.querySelector('#contactoAsunto');
const inputMensaje = document.querySelector('#contactoMensaje');


corroborarInput(inputNombre);
corroborarInput(inputEmail);
corroborarInput(inputAsunto);
corroborarInput(inputMensaje);


function corroborarInput(input){
    input.addEventListener('input', () => {
        if(input.value.length > 3 ){
            input.classList.add("input-correct") // si es "valido" cambio el color del borde
        } else {
            input.classList.remove("input-correct")
        }
    })
}

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:marianojimenezperez1@gmail.com?subject=${form.get('asunto')} - ${form.get('name')} &body=${form.get('mensaje')}`)
    $buttonMailto.click()
}
