<?php
/**
 * Created by IntelliJ IDEA.
 * User: q15-5-13
 * Date: 2017/6/2
 * Time: 12:54
 */
header('Content-type: application/json; charset=utf-8');

$rdata = $_GET['name'].$_GET['kana'].$_GET['shiptype'];
$rname = $_GET['name'];
$rkana = $_GET['kana'];
$rshiptype = $_GET['shiptype'];
$rdata = array('name' => $rname, 'kana' => $rkana, 'shiptype' => $rshiptype);


$servername = "localhost";
$username = "root";
$password = "";
$base = "localstorage";

// 创建连接
$conn = new mysqli($servername, $username, $password, $base);

$conn->set_charset('utf8');
// 检测连接
if ($conn->connect_error) {
  die("连接失败: " . $conn->connect_error);
}
$sqlstr = "INSERT INTO `player` (`name`, `kana`, `shiptype`) VALUES ('$rname','$rkana','$rshiptype')";
$rst = $conn->query($sqlstr);
if($rst === false){
  $rdata = 'error';
}

echo json_encode($rdata);