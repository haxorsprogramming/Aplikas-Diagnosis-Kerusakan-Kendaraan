<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();
// 'kdKerusakan':kdKerusakan, 'tipeKerusakan':tipeKerusakan, 'kerusakan': kerusakan, 'solusi':solusi
$kdKerusakan = $_POST['kdKerusakan'];
$tipeKerusakan = $_POST['tipeKerusakan'];
$kerusakan = $_POST['kerusakan'];
$solusi = $_POST['solusi'];

//cek apakah kode kerusakan sudah terdaftar 
$qCek = $link -> query("SELECT id FROM tbl_kerusakan WHERE kd_kerusakan='$kdKerusakan';");
$jlhKode = mysqli_num_rows($qCek);

if($jlhKode < 1){
  $link -> query("INSERT INTO tbl_kerusakan VALUES(null, '$kdKerusakan','$tipeKerusakan','$kerusakan','$solusi');");
  $dr -> status = 'sukses';
}else{
  $dr -> status = 'gagal';
}
$dr -> jlhUser = $jlhKode;
echo json_encode($dr);
?>