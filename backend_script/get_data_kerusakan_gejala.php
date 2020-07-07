<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

$kdGejala = $_POST['kdGejala'];

$qGejala = $link -> query("SELECT * FROM tbl_gejala WHERE kd_gejala='$kdGejala' LIMIT 0,1;");
$fGejala = $qGejala -> fetch_assoc();
$kdKerusakan = $fGejala['kd_kerusakan'];

$qKerusakan = $link -> query("SELECT * FROM tbl_kerusakan WHERE kd_kerusakan='$kdKerusakan' LIMIT 0,1;");
$fKerusakan = $qKerusakan -> fetch_assoc();

$dr -> gejala_kerusakan = $fGejala['gejala_kerusakan'];
$dr -> kd_kerusakan = $fGejala['kd_kerusakan'];
$dr -> kerusakan = $fKerusakan['kerusakan'];
  
echo json_encode($dr);

?>