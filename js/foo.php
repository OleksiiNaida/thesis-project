$to = 'alyoshkin123@gmail.com';
$from = "From: заявка с сайта <alyoshkin123.ua>\n\r";
$email = $_POST['email'];
$subject = $_POST['subject'];
$company = $_POST['company']
$mess = $_POST['message'];
$name = $_POST['name'];

$message = 
<html>
<body>
<center>	
   <table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
      <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Информация</b></td></tr>
      <tr>
         <td><b>Имя</b></td>
         <td>'.$name.'</td>
      </tr>
      <tr>
         <td><b>Адресат</b></td>
         <td><a href="mailto:'.$email.'">'.$email.'</a></td>
      </tr>
      <tr>
         <td><b>Предмет</b></td>
         <td>'.$subject.'</td>
      </tr>
      <tr>
         <td><b>Компания</b></td>
         <td>'.$company.'</td>
      </tr>
      <tr>
         <td><b>Сообщение</b></td>
         <td>'.$_POST['message'].'</td>
      </tr>
   </table>
</center>	
</body>
</html>';

$headers = "Content-type: text/html; charset=utf-8\r\n";
$headers = $from;

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
   mail($to, $theme, $message, $headers);
}else{
   echo 1;
}