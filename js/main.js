function validate() {
    var valid = true;

    var username = document.getElementById("userName");
    var email = document.getElementById("userEmail");
    var password = document.getElementById("Password");
    var repassword = document.getElementById("RePassword");

    // Имя не должно быть пустым;
    if (username.value.length <= 0) {
        /* alert("Пожалуйста, введите имя пользователя."); */
        username.style.borderColor = 'red';
        valid = false;
    } else {
        username.style.borderColor = 'green';
    }

    // Email не должен быть пустым, в email должен быть один символ @ и как минимум одна точка;
    /* Ищем  "@" и "." */
    var paternemail = /^\w+@\w+\.\w+$/i;
    if ((email.value.length <= 0) || (!(paternemail.test(email.value)))) {
        email.style.borderColor = 'red';
        /* alert("Пожалуйста, введите адрес электронной почты."); */
        valid = false;
    } else {
        email.style.borderColor = 'green';
    }

    // Пароль не должен быть пустым, в пароле минимум 6 символов
    if ((password.value == null || password.value == "") || (password.value.length < 6)) {
        password.style.borderColor = 'red';
        /* alert("Пожалуйста, введите пароль."); */
        valid = false;
    } else {
        password.style.borderColor = 'green';
    }

    // Повторение пароля должно совпадать с полем Пароль. 
    // Пароль не должен быть пустым, в пароле минимум 6 символов
    if ((repassword.value == null || repassword.value == "") || (repassword.value != password.value) || (repassword.value.length < 6)) {
        repassword.style.borderColor = 'red';
        /* alert("Пароль пуст или не соответствует."); */
        valid = false;
    } else {
        repassword.style.borderColor = 'green';
    }

    return valid;
}

//  Кнопка "Очистить форму", => "Очистить"  должна очищать все поля.
function clearFilds() {
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("RePassword").value = "";
}







