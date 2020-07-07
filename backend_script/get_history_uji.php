<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$qUji = $link -> query("SELECT * FROM tbl_uji ORDER BY id DESC LIMIT 0, 10;");

while($fU = $qUji -> fetch_assoc()){
  $arrTemp['kdUji'] = $fU['kd_uji'];
  $arrTemp['pelanggan'] = $fU['nama_pelanggan'];
  $arrTemp['waktu'] = $fU['waktu_uji'];
  $dbdata[] = $arrTemp;
}

echo json_encode($dbdata);
?>