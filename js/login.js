// Datos Falsos
function login(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('ya me estoy ejecutando...')
            if(email === 'test@me.com' && password === '12345') {
                const response = {
                    success: true,
                    userName: 'test',
                    email: 'test@me.com',
                    name: 'John',
                    lastName: 'Wick',
                }
                resolve(response)
            }
            resolve({ success: false })
        }, 500)
    })
}

function handleSubmit(event) {
    // Detener el submit del formulario
    event.preventDefault()
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const email = emailInput.value;
    const password = passwordInput.value;

    // Paso 1: Validacion (TODO: validar datos)
    // Paso 2: mandar los datos al backend
    const promiseLogin = login(email, password)
    // Esperar a que la promesa se resuelva o se rechace
    promiseLogin.then((respuesta) => {
        if(respuesta.success){
            console.log('Bienvenido')
            window.location.href = '/index.html'
        } else {
            alert('usuario y password incorrectos')
        }
    })
    
    // Paso 3: Reaccionar a la respuesta del backend
}
const loginFormElement = document.getElementById('login-form')
loginFormElement.addEventListener('submit', handleSubmit)