<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();
// 'kdUji':kdUji, 'pelanggan':pelanggan, 'nomorPolisi':nomorPolisi, 'mobil':mobil
$kdUji = $_POST['kdUji'];
$pelanggan = $_POST['pelanggan'];
$nomorPolisi = $_POST['nomorPolisi'];
$mobil = $_POST['mobil'];
$waktu = date("Y-m-d H:i:s");

$link -> query("INSERT INTO tbl_uji VALUES(null, '$kdUji','','','','$waktu','$pelanggan','$mobil','$nomorPolisi');");

$dr -> status = 'sukses';

echo json_encode($dr);
?>