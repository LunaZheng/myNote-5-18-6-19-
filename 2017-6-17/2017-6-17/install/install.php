<?php 
$conn = new mysqli('qdm216595431.my3w.com', 'qdm216595431', 'tianshihua', 'qdm216595431_db') or die('mysqli conn die');

$sql = file_get_contents('2017-6-17.sql');
$sql = preg_replace('/\/\*.*\*\/;?/', '', $sql);
$sql = preg_replace('/^--.*$/m', '', $sql);
$sql = preg_replace('/\n/m', '', $sql);
$arr = split(';', $sql);
print_r($arr);
exit;
foreach ($arr as $key => $value) {
  if (!$value) {
    continue;
  }
  echo $value."<br>\n";
  $conn->query($value) or die('sql import die');
}

echo 'succ';