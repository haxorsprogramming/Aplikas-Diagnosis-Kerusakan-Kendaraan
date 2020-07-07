<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

// 'kdGejala':kdGejala, 'kdKerusakan':kdKerusakan
$kdGejala = $_POST['kdGejala'];
$kdKerusakan = $_POST['kdKerusakan'];

$link -> query("UPDATE tbl_gejala SET kd_kerusakan='$kdKerusakan' WHERE kd_gejala='$kdGejala';");
?>