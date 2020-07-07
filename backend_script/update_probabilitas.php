<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}

$dr = new dataR();

//buat kd prob
$bahanKode = "1234567890qwertyuioplkjhgfdaszxcvbnm";
$acak = str_shuffle($bahanKode);
$kdProb = substr($acak, 0, 10);

// 'kdUji':kdUji, 'kdGejala':gejalaPil
$kdUji = $_POST['kdUji'];
$kdGejala = $_POST['kdGejala'];
//cari kode kerusakan dari kd gejala
$qGejala = $link -> query("SELECT * FROM tbl_gejala WHERE kd_gejala='$kdGejala';");
$fGej = $qGejala -> fetch_assoc();
$kdKerusakan = $fGej['kd_kerusakan'];

$link -> query("INSERT INTO tbl_uji_probabilitas VALUES(null,'$kdProb','$kdUji','$kdGejala','$kdKerusakan');");

$dr -> status = 'sukses';
echo json_encode($dr);
?>