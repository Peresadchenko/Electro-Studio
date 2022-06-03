<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language');
    $mail->isHTML(true);

    // от кого письмо
    $mail->setFrom('1pers1@bk.ru', 'Electro-Studio');

    // кому отправить
    $mail->addAddress('1pers1@bk.ru');

    // тема письма
    $mail->Subject = 'Это письмо от Electro-Studio';

    // тело письма
    $body = '<h1> Новое письмо! </h1>';

    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-Mail:</strong> '.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    // отправляем
    if(!$mail->send()) {
        $message = 'Ошибка';        
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>
