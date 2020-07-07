<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$qRusak = $link -> query("SELECT * FROM tbl_jenis_kerusakan;");

while($fRus = $qRusak -> fetch_assoc()){
  $arrTemp['kd_kerusakan'] = $fRus['kd_jenis'];
  $arrTemp['nama'] = $fRus['jenis_kerusakan'];
   $dbdata[] = $arrTemp;  
}

echo json_encode($dbdata);
?>