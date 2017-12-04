<?php 

/*
  array(1,2,3,4, 'a'=> 'abc');
*/

$data1 = file_get_contents('http://jd.com');
$data2 = file_get_contents('http://taobao.com');

echo json_encode(array(
  'data1'=> $data1,
  'data2'=> $data2
));