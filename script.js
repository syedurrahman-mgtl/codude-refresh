// $(window).on("load",function(){
//     $(".square-container").fadeOut("slow");
// });

var loader = document.getElementsByClassName("preloader-container");

// console.log(loader[0].style);

window.addEventListener("load", function() {
    loader[0].style.display = "none";
});