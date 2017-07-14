<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<?= isset($rdata) ? $rdata : '' ?>
<form action="deal.php" method="get">
  <input name="name" type="text"/>
  <input name="kana" type="text"/>
  <input name="shiptype" type="text"/>
  <input type="submit"/>
</form>
</body>
</html>