<?php
	$conn = new PDO('mysql: host=localhost; dbname=mvmt_database', 'root', '');
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>