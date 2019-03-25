<?php 
    session_start();

    if (!$_SESSION['login']) {
        header('Location: http://arkaufa/admin');
    }
    
    if ($_GET['exit'] == 1) {
        unset ($_SESSION['login']);
        session_destroy();
        echo "<script>window.location = '/admin/';</script>";
        exit();
    }

    require_once "db.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Арка</title>
    <link rel="stylesheet" href="../css/admin.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="../js/admin.js"></script>
</head>
<body>

<header>
    <a href="/admin/admin.php?exit=1">Выйти</a>
</header>
<nav>
    <div class="nav__item">Параметры сайта</div>
    <div class="nav__item">Настройки</div>
</nav>
<main>
<?php 
    if($_POST['do_parametrs']) {
        $places = $_POST['places'];
        mysqli_query($connection, "UPDATE `config` set `value`=$places where `name`='places'");
        echo '<div class="section__item section__item_show"><div class="save_change">Изменения сохранены</div></div>';
    }
    if($_POST['do_setting']) {
        if ($_POST['password'] == $_POST['passwordRepeat']) {
            $password = $_POST['password'];
            mysqli_query($connection, "UPDATE `login` set `password`='$password'");
            echo '<div class="section__item section__item_show"><div class="save_change">Изменения сохранены</div></div>';
        } else {
            echo '<div class="section__item section__item_show"><div class="error_change">Пароли не совпадают</div></div>';
        }
    }
?>
    <section class="parametrs">
        <h3 class="section__header">Параметры сайта</h3>
        <form action="" class="parametrs__form" method="POST">
            <div class="section__item">
                <div class="section__item__text">Количество совбодных мест на замер: </div>
                <input type="text" name="places" class="section__input" placeholder="Число" autocomplete="off" required value="<?php echo mysqli_fetch_row( mysqli_query($connection, "SELECT `value` FROM `config` WHERE `name`='places'") )[0];?>">
            </div>
            <div class="section__item">
                
                <input type="submit" name="do_parametrs" class="section__submit" value="Изменить">
            </div>
        </form>
    </section>
    <section class="setting">
        <h3 class="section__header">Настройки</h3>
        <form action="" class="section__form" method="POST">
            <div class="section__item">
                <div class="section__item__text">Новый пароль: </div>
                <input type="password" name="password" class="section__input" placeholder="Введите новый пароль" autocomplete="off" required>
            </div>
            <div class="section__item">
                <div class="section__item__text">Повтор нового пароля: </div>
                <input type="password" name="passwordRepeat" class="section__input" placeholder="Введите новый пароль" autocomplete="off" required>
            </div>
            <div class="section__item">
                <input type="submit" name="do_setting" class="section__submit" value="Изменить">
            </div>
        </form>
    </section>
</main>














</body>
</html>