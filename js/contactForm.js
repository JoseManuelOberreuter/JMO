

// CHECK NAME
function checkInputName() {
    const errorName = document.getElementById('errorName');
    const inputName = document.getElementById('inputname');
    const nameValue = inputName.value;
    // METODO PARA SACAR ESPACIOS
    const nameTrim = nameValue.trim();

    if (nameTrim === '' || nameValue == null){
        inputName.style.border = '3px solid red'
        errorName.style.opacity = '100%';
    } else {
        inputName.style.border = '3px solid green'
        errorName.style.opacity = '0%';
    }
}

// CHECK EMAIL
function checkInputEmail() {
    const errorEmail = document.getElementById('errorEmail');
    const inputEmail = document.getElementById('inputemail');
    const emailValue = inputEmail.value;
    const emailTrim = emailValue.trim();

    if (emailTrim === "" || emailValue === null){
        inputEmail.style.border = '3px solid red'
        errorEmail.style.opacity = '100%';
    } else {        
        inputEmail.style.border = '3px solid green'
        errorEmail.style.opacity = '0%';
    }
}

// CHECK MESSAGE
function checkInputMessage() {
    const errorMessage = document.getElementById('errorMessage');
    const inputMessage = document.getElementById('inputmessage');
    const messageValue = inputMessage.value;
    const messageTrim = messageValue.trim();

    if (messageTrim === "" || messageValue === null){
        inputMessage.style.border = '3px solid red'
        errorMessage.style.opacity = '100%';
    } else {
        inputMessage.style.border = '3px solid green'
        errorMessage.style.opacity = '0%';
    }
}


