<?php

$config = array(
	// 'db' => array(
	// 	'server' => 'localhost',
	// 	'username' => 'u0640637_arkufa',
	// 	'password' => 'tf7.6Tbr7p',
	// 	'name' => 'u0640637_new_arkaufa_db'
	// )
	'db' => array(
		'server' => 'localhost',
		'username' => 'root',
		'password' => '',
		'name' => 'arkaufa_db'
	)
);

$connection = mysqli_connect(
	$config['db']['server'],
	$config['db']['username'],
	$config['db']['password'],
	$config['db']['name']
);

if ($connection == false) {
	echo 'Не удалось подключиться к базе данных!<br>';
	echo mysqli_connect_error();
	exit();
}

?>