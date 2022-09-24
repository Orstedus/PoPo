var alupka = localStorage.getItem('scorus');

var scor=document.getElementById("scor");
var dubl=document.getElementById("dubl");
scor.textContent = alupka;

function updscor() {
    scor.textContent = alupka;
    localStorage.setItem("scorus", alupka);
}

function sprite1() {
    image.src = ("sprite1.png")
}

        var image=document.getElementById("image");
        image.src = "sprite1.png";
        function imgsrc() {
            image.src = ("sprite2.png")
            alupka++
            updscor()
            setTimeout(sprite1, 100)
        }