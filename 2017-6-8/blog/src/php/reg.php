<?php 
require 'config.php';

switch ($_REQUEST['a']) {
  case '注册':
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $ip = $_SERVER['REMOTE_ADDR'];

    /*if (!(mb_strlen($username) > 2 && mb_strlen($username) < 10)) {
      err(2, '用户名长度不得小于2位或大于10位');
    }*/

    if (mb_strlen($password) != 64) {
      err(2, '滚');
    }

    $row = queryRow("SELECT id FROM user WHERE username='{$username}' LIMIT 1");
    if ($row['id']) {
      err(2, '用户名已存在');
    }

    $row = queryRow("SELECT email FROM user WHERE email='{$email}' LIMIT 1");
    if ($row['email']) {
      err(2, '邮箱已存在');
    }

    $row = queryRow("SELECT ip FROM user WHERE ip='{$ip}' LIMIT 1");
    if ($row['ip']) {
      err(2, '同一ip只能注册一个用户');
    }

    $sql = "INSERT INTO user (
      username,
      email,
      password,
      level,
      ip,
      createTime
    ) VALUES (
      '{$username}',
      '{$email}',
      '{$password}',
      1,
      '{$ip}',
      ".time()."
    )";

    $conn->query($sql) or die(err(2, '注册失败'));

    $row = queryRow("SELECT * FROM user WHERE id={$conn->insert_id} LIMIT 1");
    unset($row['password']);
    $_SESSION['user'] = $row;
    res($row);
    break;
}