<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$kdKerusakan = $_POST['kdKerusakan'];

$link -> query("DELETE FROM tbl_kerusakan WHERE kd_kerusakan='$kdKerusakan';");

?>