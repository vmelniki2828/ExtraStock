<?php
// Подключаем PHPMailer вручную (без autoload)
require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';
require 'mailer/src/Exception.php';

header('Content-Type: application/json');

// Чтение входящих данных
$data = json_decode(file_get_contents("php://input"));
if (!$data) {
    echo json_encode(["error" => "Некорректный запрос"]);
    exit;
}

$name = isset($data->name) ? htmlspecialchars($data->name) : '';
$contact = isset($data->contact) ? htmlspecialchars($data->contact) : '';
$type = isset($data->type) ? htmlspecialchars($data->type) : '';

// Инициализация PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'sekondbest1@gmail.com';
    $mail->Password = 'rwwp eyqn jjgf gbxr';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('sekondbest1@gmail.com', 'Твое имя');
    $mail->addAddress('sekondbest1@gmail.com');

    if ($type === 'price') {
        $mail->CharSet = 'UTF-8'; 
        $mail->isHTML(true);
        $mail->Subject = 'Запит прайсу';
        $mail->Body = "Ім'я: $name<br>Номер телефону: $contact<br>Скачали прайс";
    } elseif ($type === 'consultation') {
        $mail->CharSet = 'UTF-8';
        $mail->isHTML(true);
        $mail->Subject = 'Запит на консультацію';
        $mail->Body = "Ім'я: $name<br>Номер телефону: $contact<br>Запросив консультацію";
    } else {
        echo json_encode(["error" => "Некорректный тип формы"]);
        exit;
    }

    // Отправка письма
    $mail->send();
    echo json_encode(["message" => "Message Sent"]);

} catch (Exception $e) {
    // Обработка ошибок
    echo json_encode(["error" => "Ошибка: " . $mail->ErrorInfo]);
}
?>
