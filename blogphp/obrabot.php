<?php
include 'includes/config.php';


                        if(isset($_POST['do_post'])) {

                         header("Location: /article.php?id=" . $_POST['id'] . '#comment-add-form');

                          mysqli_query($connection, "INSERT INTO `comments` (`author`,`nickname`,`email`,`text`,`articles_id`) VALUE ('".$_POST['name']."','".$_POST['nickname']."','".$_POST['email']."','".$_POST['text']."','".$_POST['id']."')");

                          echo '<span style="color: green; font-weight: bold; margin-bottom: 10px; display: block">Комментарий добавлен!</span>';

                            
                          /*$errors = array();

                          if($_POST['name'] == '') {
                            $errors[] = 'Введите имя!';
                          }
                          if($_POST['nickname'] == '') {
                            $errors[] = 'Введите Ваш никнейм!';
                          }
                          if($_POST['email'] == '') {
                            $errors[] = 'Введите Вашу почту!';
                          }
                          if($_POST['text'] == '') {
                            $errors[] = 'Введите текст комментария!';
                          }

                          if(empty($errors)) {
                            // исполняем добавление
                          } else {
                            echo $errors['0'];
                          }*/
                        }  
                      ?>  