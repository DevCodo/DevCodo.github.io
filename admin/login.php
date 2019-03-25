<?php require_once "db.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Арка</title>
    <link rel="stylesheet" href="css/adminka.css">
    <script src="js/jquery.magnific-popup.js"></script>
</head>
<body>
    
    <div class="authorization">
        <h3 class="config__header">Авторизация</h3>
        <form action="/login.php" class="authorization__form" method="POST">
            <div class="authorization__item">
                <input type="text" name="login" class="authorization__input" placeholder="Логин" autocomplete="off">
            </div>
            <div class="authorization__item">
                <input type="text" name="password" class="authorization__input" placeholder="Пароль" autocomplete="off">
            </div>
            <div class="authorization__item">
                <input type="submit" name="do_post" class="authorization__submit" value="Войти">
            </div>
        </form>
    </div>

    <?php 
        if ( isset($_GET['do_post']) ) {


        }
    
    ?>

    <div class="config">
        <h3 class="config__header">Параметры сайта</h3>
        <form action="/login.php" class="config__form" method="POST">
            <div class="config__item">
                <div class="config__item__text">Количество совбодных мест на замер: </div><input type="text" name="place" class="config__input" placeholder="Число" autocomplete="off">
            </div>
            <div class="config__item">
                <input type="submit" name="do_post" class="config__submit" value="Сохранить">
            </div>
        </form>
    </div>


</body>
</html>    