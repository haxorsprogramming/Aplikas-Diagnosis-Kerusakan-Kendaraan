<?php
// session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

$kdGejala = $_POST['kdGejala'];

$qGejala = $link -> query("SELECT * FROM tbl_gejala WHERE kd_gejala='$kdGejala';");
$fGejala = $qGejala -> fetch_assoc();
$kdKerusakan = $fGejala['kd_kerusakan'];

$qKerusakan = $link -> query("SELECT * FROM tbl_kerusakan WHERE kd_kerusakan='$kdKerusakan';");
$fKerusakan = $qKerusakan -> fetch_assoc();

$dr -> gejala_kerusakan =  $fGejala['gejala_kerusakan'];
$dr -> cap_kerusakan = $fKerusakan['kerusakan'];

echo json_encode($dr);

?>