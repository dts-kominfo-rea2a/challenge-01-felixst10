// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


// Data Monica
let favMonicaColor = ["Yellow", "Pink", "White", "Purple"]
let favMonicaRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang",
                             "Tteok", "Sushi", "Sushi"]

const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : [...favMonicaColor],
    isHavePet : "Yes",
    education : [
        {name : "SD 01", city : "Jakarta", graduate : "2016"},
        {name : "SMP 02", city : "Jakarta", graduate : "2019"},
        {name : "SMA 03", city : "Tangerang"}
    ],
    favoriteRestaurant : [...favMonicaRestaurant]
};

// Data Wendy
let favWendyColor = ["Blue", "Black", "Grey"]
let favWendyRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]

const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : [...favWendyColor],
    isHavePet : "No",
    education : [
        {name: "SD 02", city: "Jakarta", graduate: 2010},
        {name: "SMP 03", city: "Bogor", graduate: 2013},
        {name: "SMA 01", city: "Surabaya", graduate: 2016},
        {name: "Universitas Maju", city: "Tangerang"}
    ],
    favoriteRestaurant : [...favWendyRestaurant]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};