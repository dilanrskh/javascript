<?php

//localhost/api-native/api.php?function=getUsers
require_once "koneksi.php";

if(function_exists($_GET['function'])){
    $_GET['function']();
}

//untuk menampilkan data
function getUsers(){
    
    //Permintaan ke Server
    global $koneksi;
    $data = mysqli_query($koneksi, "SELECT * FROM users");
    while($users = mysqli_fetch_object($query)){
        $users[] = $data;
    }

    //menghasilkan respon server
}


?>