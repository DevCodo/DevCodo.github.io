<?php
    session_start();
    require_once "db.php";
    $select = mysqli_query($connection, "SELECT `password` FROM `login`");
    $row = mysqli_fetch_row($select);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Арка</title>
    <link rel="stylesheet" href="../css/admin.css">
    <!-- <script src="js/jquery.magnific-popup.js"></script> -->
</head>
<body>


    <div class="container">
        <div class="authorization">
            <h3 class="config__header">Авторизация</h3>
            <form action="" class="authorization__form" method="POST">
                <div class="authorization__item">
                    <input type="text" name="password" class="authorization__input" placeholder="Введите пароль" autocomplete="off">
                </div>

                <?php 
                    if($_POST['do_post']) {

                        $pass = $_POST['password'];

                        if ($pass === $row[0]) {
                            $_SESSION['login'] = $pass;
                            echo "<script>window.location = '/admin/admin.php';</script>";
                        } else {
                            echo '<div class="error_password">Неверныый пароль</div>';
                        }
                    }
                ?>
                <div class="authorization__item">
                    <input type="submit" name="do_post" class="authorization__submit" value="Войти">
                </div>
            </form>
        </div>
    </div>

</body>
</html>
