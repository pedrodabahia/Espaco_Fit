<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);

$user = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["Telefone"];
$visita = $_POST["data"];
$cat = $_POST["modalidade"];

$data = file_get_contents('banco.json');

$arquivo = './banco.json';

$json = json_decode($data,true);

$json[$user] = array(
	"nome" => $user,
	"email" => $email,
	"telefone" => $telefone,
	"visita" => $visita,
	"cat" => $cat

);

$enviar = json_encode($json, JSON_PRETTY_PRINT);

$file = fopen($arquivo, 'w+');

fwrite($file, $enviar);
echo "string";
fclose($file);




?>
