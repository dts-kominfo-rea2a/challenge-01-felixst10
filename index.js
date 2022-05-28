// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


// Data Monica
const favMonicaColor = ["Yellow", "Pink", "White", "Purple"]
const favMonicaRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang",
                             "Tteok", "Sushi", "Sushi"]
let favColorMonica = new Set(favMonicaColor);
let favRestaurantMonica = new Set(favMonicaRestaurant)

const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : [...favColorMonica],
    isHavePet : "Yes",
    education : [
        {name : "SD 01", city : "Jakarta", graduate : "2016"},
        {name : "SMP 02", city : "Jakarta", graduate : "2019"},
        {name : "SMA 03", city : "Tangerang"}
    ],
    favoriteRestaurant : [...favRestaurantMonica]
};

// Data Wendy
const favWendyColor = ["Blue", "Black", "Grey"]
const favWendyRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]
let favColorWendy = new Set(favWendyColor)
let favRestaurantWendy = new Set(favWendyRestaurant)

const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : [...favColorWendy],
    isHavePet : "No",
    education : [
        {name: "SD 02", city: "Jakarta", graduate: 2010},
        {name: "SMP 03", city: "Bogor", graduate: 2013},
        {name: "SMA 01", city: "Surabaya", graduate: 2016},
        {name: "Universitas Maju", city: "Tangerang"}
    ],
    favoriteRestaurant : [...favRestaurantWendy]
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