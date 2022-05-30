window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.querySelector('#nombre')
    const apellido = document.querySelector('#apellido')
    const email = document.querySelector('#email')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        checker()
    })

    function checker() {
        const nombreValue = nombre.value.trim()
        const apellidoValue = apellido.value.trim()
        const emailValue = email.value.trim()

    if(!nombreValue){
            error404(nombre, 'Rellene este campo')
        }else{
            notAnError(nombre)
    }
    if(!apellidoValue){
            error404(apellido, 'Rellene este campo')
        }else{
            notAnError(apellido)
    }
        
    if(!emailValue){
            error404(email, 'Rellene este campo')            
        }else if(!ismail(emailValor)) {
            error404(email, 'Ingrese un e-mail válido')
        }else {
            notAnError(email)
    }
    }

    const error404 = (input, msje) => {
    const formChecker = input.parentElement
    const msj = formChecker.querySelector('p')
    msj.innerText = msje

    formChecker.className = 'formChecker invalid'
    }
    const notAnError = (input, msje) => {
    const formChecker = input.parentElement
    formChecker.className = 'formChecker valid'
    }

})

