# monitor-uploader
Monitoring Your User Uploader Activity

## Installation
Required nodejs 12++

```bash
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
$ sudo apt-get -y install nodejs
$ git clone https://github.com/sonofescobar1337/monitor-uploader
$ cd monitor-uploader
$ npm install
$ node index.js
```


## Example usage
Setting aja file yang ada di server kalian yang berfungsi buat upload,dan tambahkan beberapa line <br>
contoh seperti berikut :
```php
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

```

Bisa dilihat di [example.php](https://github.com/sonofescobar1337/server-scanner/blob/main/example/example.php) untuk refrensi ente. <br>


## fungsi utama

| Fungsi  | Status |
| ------------- | ------------- |
| Detect When User Upload Shell Backdoor  | ✅  |
| Send Log to console  | ✅  |
| No auto delete,at least you can check the file first | ✅  |

## Donate
[Saweria](https://saweria.co/sonofescobar1337) <br>
[Bitcoin] 1AeC5uQRzj8stw6zpgYctK7hSpKUZ3754a <br>
[Ethereum and bnb] 0x03aa92f7abee133c1ee10e573757a6fdc2f544b2 <br>
[Tron TRC-20] TEXwAYqTMb5F7hDj7QnawNVYLqfyv8oNWe <br>

## Screenshots
![Screenshots 1](https://github.com/sonofescobar1337/server-scanner/blob/main/screenshots/scrennshots-1.jpg?raw=true)
