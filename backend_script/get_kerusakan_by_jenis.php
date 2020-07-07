<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$kdJenis = $_POST['kdJenis'];

$kdKerusakan = $link -> query("SELECT * FROM tbl_kerusakan WHERE kd_jenis_kerusakan='$kdJenis';");

while($fJen = $kdKerusakan -> fetch_assoc()){
  $arrTemp['kd_kerusakan'] = $fJen['kd_kerusakan'];
  $arrTemp['jenis_kerusakan'] = $fJen['kd_jenis_kerusakan'];
  $arrTemp['kerusakan'] = $fJen['kerusakan'];
  $arrTemp['solusi'] = $fJen['saran_solusi'];
  $dbdata[] = $arrTemp;
}

echo json_encode($dbdata);
?>