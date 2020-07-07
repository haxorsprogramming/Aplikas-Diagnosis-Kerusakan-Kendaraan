<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

$kdKerusakan = $_POST['kdKerusakan'];

$qKerusakan = $link -> query("SELECT * FROM tbl_kerusakan WHERE kd_kerusakan='$kdKerusakan' LIMIT 0,1;");
$fKerusakan = $qKerusakan -> fetch_assoc();
$jenisKerusakan = $fKerusakan['kd_jenis_kerusakan'];

//cari cap kerusakan
$qJenisKerusakan = $link -> query("SELECT * FROM tbl_jenis_kerusakan WHERE kd_jenis='$jenisKerusakan' LIMIT 0,1;");
$fJk = $qJenisKerusakan -> fetch_assoc();
$capJenis = $fJk['jenis_kerusakan'];
  
$dr -> kd = $kdKerusakan;
$dr -> kerusakan = $fKerusakan['kerusakan'];
$dr -> solusi = $fKerusakan['saran_solusi'];
$dr -> tipeKerusakan = $jenisKerusakan;
$dr -> capJenisKerusakan = $capJenis;
  
echo json_encode($dr);
?>