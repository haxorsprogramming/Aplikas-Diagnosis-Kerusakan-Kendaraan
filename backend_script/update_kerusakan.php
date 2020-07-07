<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

// 'kdKerusakan':kdKerusakan, 'kerusakan':kerusakan, 'solusi':solusi
$kdKerusakan = $_POST['kdKerusakan'];
$kerusakan = $_POST['kerusakan'];
$solusi = $_POST['solusi'];

$link -> query("UPDATE tbl_kerusakan SET kerusakan='$kerusakan', saran_solusi='$solusi' WHERE kd_kerusakan='$kdKerusakan';");

$dr -> status = 'sukses';

echo json_encode($dr);
?>