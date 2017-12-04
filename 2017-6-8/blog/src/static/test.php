<?php 

$handler = opendir('./biaoqing');
$arr = [];
while ($filename = readdir($handler)) {
  if ($filename === '.' || $filename === '..') {
    continue;
  }
  $arr[] = $filename;
}

foreach ($arr as $key => $value) {
  $path = './biaoqing/'.$value;
  rename($path, './biaoqing/'.$key.'.gif');
}