<?php
$httpHost = 'https://www.peteandrob.com/';
$imagesPath = $httpHost . 'downloads/wallpaper/%s.jpg';
$videosPath = $httpHost . 'files/mp4/%s.mp4';

$start = (isset($_GET['start'])) ? (int)$_GET['start'] : 0;
$limit = (isset($_GET['limit'])) ? (int)$_GET['limit'] : 4;
//$limit = 15;

define ('_VALID',1);
require_once ("../../../peteandrob_config.inc.php");

mysql_connect($mysqlServer, $mysqlUser, $mysqlPass);
mysql_select_db($mysqlDb);

$sql = '
SELECT SQL_CALC_FOUND_ROWS
	name 				AS title,
	CONCAT(normal) 		AS normal,
	CONCAT(low) 		AS low,
	CONCAT(high) 		AS high,
	CONCAT(768x1024) 	AS 768x1024,
	CONCAT(1536x2048) 	AS 1536x2048

FROM
	par_wallpaper

ORDER BY
	ID DESC

LIMIT
	%d, %d
';
$sql = sprintf($sql, $start, $limit);

$data = array(
	'info' => array(
		'start' => $start,
		'limit' => $limit
	),
	'wallpaper' => array()
);
$result = mysql_query($sql);
while($row = mysql_fetch_assoc($result)) {
	$row['normal'] = sprintf($imagesPath, $row['normal']);
	$row['low'] = sprintf($imagesPath, $row['low']);
	$row['high'] = sprintf($imagesPath, $row['high']);
	$row['768x1024'] = sprintf($imagesPath, $row['768x1024']);
	$row['1536x2048'] = sprintf($imagesPath, $row['1536x2048']);
	$data['wallpaper'][] = $row;
}

$sql = 'SELECT FOUND_ROWS() as count';
$result = mysql_query($sql);
while($row = mysql_fetch_assoc($result)) {
	$data['info']['total'] = (int)$row['count'];
}

header('Content-Type: application/json');
print(json_encode($data));
