<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}

$dr = new dataR();
// 'kdGejala':kdGejala, 'gejala':gejala, 'tipeKerusakan':tipeKerusakan
$kdGejala = $_POST['kdGejala'];
$gejala = $_POST['gejala'];
$tipeKerusakan = $_POST['tipeKerusakan'];

$link -> query("INSERT INTO tbl_gejala VALUES(null, '$kdGejala','$gejala','','$tipeKerusakan');");

$dr -> kdGejala = $tipeKerusakan;
$dr -> status = 'sukses';

echo json_encode($dr);

?>