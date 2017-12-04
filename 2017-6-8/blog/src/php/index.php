<?php 
require 'config.php';

switch ($_REQUEST['a']) {
  case '首页':
    res(queryData("SELECT * FROM article"));
    break;
  case '作品':
    res(queryData("SELECT * FROM demo"));
    break;
  case '朋友':
    $data = queryData("SELECT * FROM user");
    foreach ($data as $key => $value) {
      unset($data[$key]['password']);
    }
    res($data);
    break;
  case '关于':

    break;
}