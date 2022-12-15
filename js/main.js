function validate() {
    var username = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("Password").value;
    var repassword = document.getElementById("RePassword").value;
    if (username.length <= 0) {
        alert("Пожалуйста, введите имя пользователя.");
        return false;
    }
    if (email.length <= 0) {
        alert("Пожалуйста, введите адрес электронной почты.");
        return false;
    }
    if ((password == null || password == "") && (password.length >= 6)) {
        alert("Пожалуйста, введите пароль.");
        return false;
    }
    if ((repassword == null || repassword == "" || repassword != password) && (password.length >= 6)) {
        // Changed Password message for testing
        alert("Пароль пуст или не соответствует.");
        return false;
    }
}

function clearFilds() {
    /* console.log("Сработал"); */
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("RePassword").value = "";
}
