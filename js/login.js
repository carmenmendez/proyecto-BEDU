// Datos Falsos
function fakeLogin(email, password) {
    if(email === 'test@me.com' && password === '12345') {
        return {
            success: true
        }
    }
    return {
        success: false
    }
}


const loginFormElement = document.getElementById('login-form')
function handleSubmit(event) {
    // Detener el submit del formulario
    event.preventDefault()
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const email = emailInput.value;
    const password = passwordInput.value;
    const response = fakeLogin(email, password)

    if(response.success) {
        alert('Yeiiiii Bienvenido')
    } else {
        alert('Usuario o password inválido')
    }

    // Paso 1: Validacion (TODO: validar datos)
    // Paso 2: mandar los datos al backend
    
    // Paso 3: Reaccionar a la respuesta del backend
}
loginFormElement.addEventListener('submit', handleSubmit)