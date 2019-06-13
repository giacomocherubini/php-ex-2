<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/public/css/app.css">
  </head>
  <body>

    <?php

    $parola_giusta = $_GET['parola'];
    $stringa_verde = 'la parola è esatta';
    $stringa_rossa = 'la parola è sbagliata';

    if ($parola_giusta ==  'Boolean') {
      echo '<font color="#33cc33" font size="20px">' . $stringa_verde . '</font>';
    } else  {
      echo '<font color="#ff0000" font size="20px">' . $stringa_rossa . '</font>';
    }
     ?>

  </body>
</html>
