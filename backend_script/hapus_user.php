<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('db.php');

class dataR{}
$dr = new dataR();

$id = $_POST['id'];

$link -> query("DELETE FROM tbl_user WHERE id='$id';");

$dr -> status = 'sukses';

echo json_encode($dr);

?>