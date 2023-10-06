//If Else
let dmorning = "Andi";
console.log("If Else");
if (dmorning === "Andi") {
  console.log("Andi Sesi Pagi");
} else {
  console.log("Andi Sesi Siang");
}

//nested if
let tahun = 2003;
console.log("nested if");
if ((tahun >= 1946, tahun < 1960)) {
  console.log("Generasi BabyBoomers");
} else if ((tahun >= 1960, tahun < 1980)) {
  console.log("Generasi X");
} else if ((tahun >= 1980, tahun < 1990)) {
  console.log("Generasi Milenial");
} else if ((tahun >= 1990, tahun < 2010)) {
  console.log("Generasi Z");
} else if ((tahun >= 2010, tahun < 2023)) {
  console.log("Generasi Alpha");
} else {
  console.log("Data tidak diketahui");
}

//Switch Case
let hari = "Jumat";
console.log("Switch Case");
switch (hari) {
  case "Senin":
    console.log("Hari ini hari senin");
    break;
  case "Selasa":
    console.log("Hari ini hari selasa");
    break;
  case "Rabu":
    console.log("Hari ini hari rabu");
    break;
  case "Kamis":
    console.log("Hari ini hari kamis");
    break;
  case "Jumat":
    console.log("Hari ini hari jumat");
    break;
  default:
    console.log("Hari ini Weekend");
    break;
}

//For Looping
console.log("Perulangan For Looping");
for (let x = 0; x <= 15; x++) {
  console.log(x);
}

//While
let x = 0;
console.log("Perulangan While");
while (x <= 10) {
  console.log(x);
  x = x + 1;
}

//Do While
let y = 0;
console.log("Perulangan do While");
do {
  y++;
  console.log(y);
} while (y < 5);

//Function
console.log("Function");
let nama = "andi";
let hobby = "jalan-jalan";

function myFunction() {
  console.log(nama + " suka " + hobby);
}
myFunction();
