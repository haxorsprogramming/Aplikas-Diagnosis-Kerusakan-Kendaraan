<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$qUser = $link -> query("SELECT * FROM tbl_user;");

while($fUser = $qUser -> fetch_assoc()){
  $arrTemp['id'] = $fUser['id'];
  $arrTemp['username'] = $fUser['username'];
  $dbdata[] = $arrTemp;
}

echo json_encode($dbdata);

?>