<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

$dbdata = array();

$kodeUji = $_POST['kdUji'];
//cari jumlah kerusakan berdasarkan gejala 
$qKerusakan = $link -> query("SELECT * FROM tbl_kerusakan;");
$jlhData = mysqli_num_rows($qKerusakan);

$fNilaiAwal = 0;
$fKdMenang = '';
$solusiDil = '';
$kerusakanDil = '';

//cari id pengujian 
$qUjian = $link -> query("SELECT * FROM tbl_uji WHERE kd_uji='$kodeUji';");
$fUji = $qUjian -> fetch_assoc();



while($fk = $qKerusakan -> fetch_assoc()){
  $kdKerusakan = $fk['kd_kerusakan'];
  $qBobotKerusakan = $link -> query("SELECT id FROM tbl_uji_probabilitas WHERE kd_uji='$kodeUji' AND kd_kerusakan='$kdKerusakan';");
  $fBobot = mysqli_num_rows($qBobotKerusakan);
  $bobotPersen = ($fBobot / $jlhData) * 100;
  if($fNilaiAwal < $fBobot){
    $fNilaiAwal = $fBobot;
    $fKdMenang = $kdKerusakan;
    $solusiDil = $fk['saran_solusi'];
    $kerusakanDil = $fk['kerusakan'];
  }
  $arrTemp['kdKerusakan'] = $kdKerusakan;
  $arrTemp['kerusakan'] = $fk['kerusakan'];
  $arrTemp['solusi'] = $fk['saran_solusi'];
  $arrTemp['jlhBobot'] = $fBobot;
  $dbdata['tabelProp'][] = $arrTemp;
}

$dbdata['kdPemenang'] = $fKdMenang;
$dbdata['solusiDil'] = $solusiDil;
$dbdata['kerusakanDil'] = $kerusakanDil;
$dbdata['pelanggan'] = $fUji['nama_pelanggan'];
$dbdata['mobil'] = $fUji['nama_mobil'];
$dbdata['nomorPolisi'] = $fUji['nomor_polisi'];
// $dr -> status = 'sukses';
echo json_encode($dbdata);
?>