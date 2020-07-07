<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$kdJenis = $_POST['kdJenis'];
$qGejala = $link -> query("SELECT * FROM tbl_gejala WHERE kd_jenis_kerusakan='$kdJenis';");

while($fGe = $qGejala -> fetch_assoc()){
  $arrTemp['kd_gejala'] = $fGe['kd_gejala'];
  $arrTemp['gejala_kerusakan'] = $fGe['gejala_kerusakan'];
  $dbdata[] = $arrTemp;  
}

echo json_encode($dbdata);

?>