<?php 
    $recepient = "iva_black@mail.ru";
    $sitename = "Cubitum";
    
    $phone = trim($_POST["phone"]);
    $message = "Имя: \nТелефон: $phone";
    
    $pagetitle = "Новая заявка с сайта $sitename";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>