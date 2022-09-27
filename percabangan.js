// 1. Syntax Percabangan If

// var umurPeserta = 10;

// if(umurPeserta > 17){
//     document.getElementById("if").innerHTML = "Kamu boleh masuk Wahana ini."
// }


// 2. Syntax Percabangan If Else

// var umurPeserta = 10;

// if(umurPeserta > 17){
//     document.getElementById("ifelse").innerHTML = "Kamu boleh masuk Wahana ini."
// }else{
//     document.getElementById("ifelse").innerHTML = "Kamu tidak bisa masuk Wahana ini."
// }


// 3. Syntax Percabangan If Else If

// var umurPeserta = ;

// if(umurPeserta >= 17){
//     document.getElementById("ifelseif").innerHTML = "Kamu boleh masuk Wahana ini.";
// }else if (umurPeserta >= 14 ){
//     document.getElementById("ifelseif").innerHTML = "Kamu boleh masuk tapi didampingi orangtua.";
// }else if (umurPeserta >=10){
//     document.getElementById("ifelseif").innerHTML = "Kamu tidak boleh masuk."
// }else{
//     document.getElementById("ifelseif").innerHTML = "Terimakasih sudah datang !"
// }


// 4. Syntax Percabangan switchCase

// var umurPeserta = prompt("Masukkan Umur Anda !");
// var warna;

// switch (true){
//     case umurPeserta >=17:
//         warna = "Anda mendapatkan warna biru.";
//         document.getElementById("switchcase").innerHTML = warna;
//         break;

        
//     case umurPeserta >=14:
//         warna = "Anda mendapatkan warna merah.";
//         document.getElementById("switchcase").innerHTML = warna;
//         break;

//     case umurPeserta >=10:
//         warna = "Anda mendapatkan warna hijau.";
//         document.getElementById("switchcase").innerHTML = warna;
//         break;

//    default:
//     warna = "Terimakasih sudah datang!";
//     document.getElementById("switchcase").innerHTML = warna;20
// }


// 5.Syntax Percabangan Nested

// var data = {nama:"dilot", email:"dila02@gmail.com", password:"0204", role:"orang"};

// function masuk(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     console.log(email);
//     if(data.email == email){
//         if(data.password == password){
//             if(data.role == "orang"){
//                 alert("Haiiiii " + data.nama);
//             }
//         }else{
//             alert("Salah");
//         }
//     }else{
//         alert("Eyyowww");
//     }
// }


// 6. Syntax Percabangan Ternary

var umurPeserta = 20;

var warna =

umurPeserta >= 17 ? " Silahkan ambil kotak di sebelah kanan." :
"Buka kotaknya!";

document.getElementById("ternary").innerHTML = warna;