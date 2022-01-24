var chatR = document.getElementById("chatRR");
var chienR = document.getElementById("chienRR");
var chatBtn = document.getElementById("chatBtn");
var chienBtn = document.getElementById("chienBtn");

chatBtn.addEventListener('click', getRandomCat);
chienBtn.addEventListener('click', getRandomDog);

function getRandomCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
        chatR.innerHTML = `<img src${data.file} />`
    });
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then(data => {
        chienR.innerHTML = `<img src${data.url} />`
    });
}

