<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

$username = $_POST['username'];
$password = $_POST['password'];
$passHash = md5($passHash);
$tipe = $_POST['tipe'];
$waktu = date("Y-m-d H:i:s");
//cek apakah username sudah ada 
$qUsername = $link -> query("SELECT id FROM tbl_user WHERE username='$username';");
$jUser = mysqli_num_rows($qUsername);

if($jUser == '0'){
  $dr -> status = 'sukses';
  $link -> query("INSERT INTO tbl_user VALUES(null, '$username','$passHash','$waktu','$tipe');");
}else{
  $dr -> status = 'gagal';
}

echo json_encode($dr);

?>