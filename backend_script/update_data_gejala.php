<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

// 'gejala':gejala,'kdGejala':kdGejala
$gejala = $_POST['gejala'];
$kdGejala = $_POST['kdGejala'];

$link -> query("UPDATE tbl_gejala SET gejala_kerusakan='$gejala' WHERE kd_gejala='$kdGejala';");

?>