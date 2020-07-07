<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$qkerusakan = $link -> query("SELECT * FROM tbl_kerusakan;");

while($fKer = $qkerusakan -> fetch_assoc()){
  $arrTemp['kd_kerusakan'] = $fKer['kd_kerusakan'];
  $arrTemp['kerusakan'] = $fKer['kerusakan'];
  $dbdata[] = $arrTemp; 
}

echo json_encode($dbdata);
?>