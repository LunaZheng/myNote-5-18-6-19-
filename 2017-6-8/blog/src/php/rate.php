<?php 
require 'config.php';

switch ($_REQUEST['a']) {
  case '增':
    $nickName = $_REQUEST['nickName'];
    $content = $_REQUEST['content'];
    $tableName = $_REQUEST['tableName'];
    $tableId = $_REQUEST['tableId'];
    $ip = $_SERVER['REMOTE_ADDR'];
    $avatar = rand(0, 46);

    $row = queryRow("SELECT createTime FROM rate WHERE ip='{$ip}' ORDER BY id DESC LIMIT 1");
    if ($row['createTime'] && time() - $row['createTime'] < 60) {
      err(2, '先喝杯茶等等，1分钟后再说');
    }

    query("INSERT INTO rate (
      nickName,
      tableName,
      tableId,
      content,
      ip,
      avatar,
      createTime
    ) VALUES (
      '{$nickName}',
      '{$tableName}',
      '{$tableId}',
      '{$content}',
      '{$ip}',
      '{$avatar}',
      ".time()."
    )") or die(err(1, '评论写入失败'));
    res(queryRow("SELECT * FROM rate WHERE id=".$conn->insert_id." LIMIT 1"));
    break;
  case '查':
    res(queryData("SELECT * FROM rate WHERE tableId={$_REQUEST['tableId']} AND tableName='{$_REQUEST['tableName']}' ORDER BY id DESC "));
    break;
}