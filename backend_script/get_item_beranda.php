<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR;

//cari jumlah data uji 
$qUji = $link -> query("SELECT * FROM tbl_uji;");
$qGejala = $link -> query("SELECT * FROM tbl_gejala;");
$dr -> j_data_uji = mysqli_num_rows($qUji);
$dr -> j_data_gejala = mysqli_num_rows($qGejala);
$dr -> j_data_solusi = 12;

echo json_encode($dr);

?>