<?php
$httpHost = 'https://www.peteandrob.com/';
$imagesPath = $httpHost . 'images/adventures/150/%s.jpg';
$imagesPath200 = $httpHost . 'images/adventures/200/%s.jpg';
$imagesPath400 = $httpHost . 'images/adventures/400/%s.jpg';
$imagesPath550 = $httpHost . 'images/adventures/550/%s.jpg';
$imagesPath1500 = $httpHost . 'images/social/%s.jpg';
$videosPath = $httpHost . 'files/mp4/hd/%s.mp4';
$canonical = $httpHost . 'adventures-%s-Playmobil-stop-motion-film-%s.html';

$start = (isset($_GET['start'])) ? (int)$_GET['start'] : 0;
$limit = (isset($_GET['limit'])) ? (int)$_GET['limit'] : 25;
//$limit = 15;

define ('_VALID',1);
require_once ("../../../peteandrob_config.inc.php");

mysql_connect($mysqlServer, $mysqlUser, $mysqlPass);
mysql_select_db($mysqlDb);

$sql = '
SELECT SQL_CALC_FOUND_ROWS
	adventure 			AS title,
	adventure 			AS titlesoc,
	adventure_descr 	AS description,
	CONCAT(image)		AS imagesoc,
	CONCAT(image) 		AS image,
	CONCAT(image) 		AS image200,
	CONCAT(image) 		AS image400,
	CONCAT(image) 		AS image550,
	CONCAT(image) 		AS image1500,
	CONCAT(flafile) 	AS video

FROM
	par_adventures

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
	'videos' => array()
);
$result = mysql_query($sql);
while($row = mysql_fetch_assoc($result)) {

	$row['titlesoc'] = str_replace('&','and',$row['titlesoc']);
	$row['titlesoc'] = str_replace('(','',$row['titlesoc']);
	$row['titlesoc'] = str_replace(')','',$row['titlesoc']);
	$row['titlesoc'] = str_replace('\'','',$row['titlesoc']);
	$row['titlesoc'] = str_replace(',','',$row['titlesoc']);
	$row['titlesoc'] = str_replace('!','',$row['titlesoc']);
	$row['titlesoc'] = str_replace(' ','-',$row['titlesoc']);

	$row['image'] = sprintf($imagesPath, $row['image']);
	$row['image200'] = sprintf($imagesPath200, $row['image200']);
	$row['image400'] = sprintf($imagesPath400, $row['image400']);
	$row['image550'] = sprintf($imagesPath550, $row['image550']);
	$row['image1500'] = sprintf($imagesPath1500, $row['image1500']);
	$row['video'] = sprintf($videosPath, $row['video']);
	$row['socurl'] = sprintf($canonical, $row['titlesoc'], $row['imagesoc']);
	$data['videos'][] = $row;
}

$sql = 'SELECT FOUND_ROWS() as count';
$result = mysql_query($sql);
while($row = mysql_fetch_assoc($result)) {
	$data['info']['total'] = (int)$row['count'];
}

header('Content-Type: application/json');
print(json_encode($data));
