let mybutton = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("modalImg");

var images = document.querySelectorAll(".gallery");

for (var i = 0; i < images.length; i++) {

    images[i].onclick = function () {

        modal.style.display = "flex";
        modalImg.src = this.src;

    };

}

modal.onclick = function () {

    modal.style.display = "none";

};