//contoh if dan else

var angka = 15;

if (angka < 10) {
    console.log('masih ada sisa');
    } else{
    console.log('terlalu banyak angka');
    } 

//comtoh nested if

var name = "maulana"
var pass = "12345"

if(name == "maulana"){
    if(pass == "12345" ){
        console.log("Selamat Datang");
    }else{
        console.log("Kamu Salah")
    }
}

//contoh menggunakan switch case

let bulan = "";

switch (bulan) {
    case "Oktober":
        console.log ("ini bulan Oktober")
        break;
    case "September":
        console.log ("ini bulan September")
        break;
    default:
        console.log ("belum mulai")
        break;
}

//contoh for

var no = 7;

for ( no = no ; no <= 10; no++){
    console.log(no);
}

//contoh while

var a = 1;

while (a <= 10){
    console.log("angka" + a);
    a++;
}

// contoh do while

let i = 0;
do {
    i += 10;
    console.log(i);
} while (i < 100);

// contoh function


let x = angka (4, 10)

function angka (a, b){
    console.log (a * b) ;
}