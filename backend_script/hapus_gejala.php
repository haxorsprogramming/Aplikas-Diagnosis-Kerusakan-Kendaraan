<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$kdGejala = $_POST['kdGejala'];

$link -> query("DELETE FROM tbl_gejala WHERE kd_gejala='$kdGejala';");
?>