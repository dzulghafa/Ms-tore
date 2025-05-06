<?php
$host = 'localhost';
$dbname = 'm-store'; // Ganti sesuai nama database kamu
$user = 'root'; // Ganti kalau user database bukan root
$pass = '';     // Ganti sesuai password database

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Koneksi gagal: " . $e->getMessage()]);
    exit;
}