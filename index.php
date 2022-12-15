<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link href="/css/main.css" rel="stylesheet">
  <title>Тест</title>
</head>

<body id="body">
  <main class="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-4 m-auto">
    <form name="mainform" action="send_form.php" method="post" class="p-4 p-sm-5 border rounded-3 bg-light needs-validation" onsubmit="return(validate());">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="userName" name="userName" placeholder="Имя" required oninput="validate();">
        <label for="userName">Имя</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="userEmail" name="userEmail" placeholder="name@example.com" required oninput="validate();">
        <label for="userEmail">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="Password" name="Password" placeholder="Password" minlength="6" required oninput="validate();">
        <label for="Password">Password</label>
      </div>
      <div class="form-floating mb-5">
        <input type="password" class="form-control" id="RePassword" name="RePassword" placeholder="RePassword" minlength="6" required oninput="validate();">
        <label for="RePassword">RePassword</label>
      </div>

      <div class="text-center col-12 col-sm-12 col-md-10 col-lg-12 col-xl-12 col-xxl-10 m-auto">
        <button hreff="" class="btn btn-lg btn-primary col-12 col-md-5 my-1" onclick="clearFilds();">Очистить</button>
        <button class="btn btn-lg btn-primary col-12 col-md-5 my-1" type="submit">Отправить</button>
      </div>

      <hr class=" my-4">
      <small class="text-muted mx-auto">Нажимая Отправить, вы соглашаетесь с условиями использования.</small>
    </form>
  </main>

  <script src="/js/bootstrap.bundle.min.js"></script>
  <script src="/js/main.js"></script>

</body>

</html>