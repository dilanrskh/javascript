// // 1.Syntax Branching If

// var totalBelanja = 120000;

// if(totalBelanja > 100000){
//     document.getElementById ("if").innerHTML = "Yeyyyy, Kamu dapet hadiahhh";
// }

// // 2. Syntax Branching If Else

// var totalBelanja = 9000;

// if(totalBelanja > 100000){
//     document.getElementById ("ifELse").innerHTML = "Yeyyyy, Kamu dapet hadiahhh";
// }else{
//     document.getElementById ("ifELse").innerHTML = "Yhaaaa, ngak dapet hadiah";
// }


// 3. Syntax Branching If Else If

// var totalBelanja = 250000;

// if (totalBelanja >= 500000) {
//   document.getElementById("ifElseIf").innerHTML ="Selamat, Anda dapat Mobil";
// } else if (totalBelanja >= 400000) {
//   document.getElementById("ifElseIf").innerHTML ="Selamat, Anda dapat Motor";
// } else if (totalBelanja >= 300000) {
//   document.getElementById("ifElseIf").innerHTML = "Selamat, Anda dapat Sepeda";
// } else {
//   document.getElementById("ifElseIf").innerHTML ="Terima kasih, sudah berbelanja";
// }



// 4. Syntax Branching switch case
// var totalBelanja = prompt("Masukkan total belanja");
// var hadiah;

// switch (true) {
//   case totalBelanja >= 500000:
//     hadiah = "Selamat, Anda dapat Mobil";
//     document.getElementById("switchCase").innerHTML = hadiah;
//     break;

//   case totalBelanja >= 400000:
//     hadiah = "Selamat, Anda dapat Motor";
//     document.getElementById("switchCase").innerHTML = hadiah;
//     break;

//   case totalBelanja >= 300000:
//     hadiah = "Selamat, Anda dapat Sepeda";
//     document.getElementById("switchCase").innerHTML = hadiah;
//     break;

//   default:
//     hadiah = "Terima kasih, sudah berbelanja";
//     document.getElementById("switchCase").innerHTML = hadiah;
// }


// 5. Syntax Branching Ternary

// var totalBelanja = 100000;

// var hadiah =

// totalBelanja >= 100000 ? " Selamat, kamu dapet mobil" :
// "Teriamkasih sudah belanja";

// document.getElementById("ternary").innerHTML = hadiah;


// 6. Syntax Branching Nested

var users = {name:"dila", email:"dila@gmail.com", password:"0204", role:"admin"};

function login(){

    var email      = document.getElementById("email").value;
    var password   = document.getElementById("password").value;
    
    console.log(email);
    if(users.email == email){
        if(users.password == password){
            if(users.role == "admin"){
                alert("Selamat Datang " + users.name);
            }
        }else{
            alert("Kesalahan Autentikasi !");
        }
    }else{
        alert("Kesalahan Autentikasi !");
    }
}