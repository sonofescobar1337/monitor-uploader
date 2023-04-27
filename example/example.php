<?php

$target_dir = "YOUR_PATH";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;


if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";

} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $path = $target_file;
        $ip = $_SERVER['REMOTE_ADDR'];
        $url = "http://localhost:3000/upload?path=" . urlencode($path) . "&ip=" .$ip;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

?>
