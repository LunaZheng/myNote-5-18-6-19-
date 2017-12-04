<?php 
require 'config.php';
$articleId = mysql_real_escape_string($_REQUEST['articleId']);
$userId = mysql_real_escape_string($_REQUEST['userId']);
$title = mysql_real_escape_string($_REQUEST['title']);
$subTitle = mysql_real_escape_string($_REQUEST['subTitle']);
$content = mysql_real_escape_string($_REQUEST['content']);

switch ($_REQUEST['a']) {
  case '查':
    res(queryData("SELECT u.username, a.id, a.userId, a.title, a.subTitle, a.createTime FROM article AS a JOIN user AS u ON a.userId=u.id ORDER BY id DESC "));
    break;
}