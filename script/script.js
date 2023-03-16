(function () {
    var myPhotos = ["body-background1.jpg", "body-background2.jpg", "body-background3.jpg", "body-background4.jpg", "body-background5.jpg"];
    var i = 0;
    var container = document.getElementById("content");
    var time = 2500;

    function changeImg() {
        theSlide = document.createElement('img');
        theSlide.src = `images/${myPhotos[i]}`;
        theSlide.className = "fadeInImg";
        container.appendChild(theSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
        if (i < myPhotos.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(changeImg, time);
    }

    window.onload = changeImg;


})();


// window.onscroll =  function(){
//     headerFunction()
// };

// var header = document.getElementById("myHeader");

// var sticky = header.offsetTop;

// function headerFunction() {
//     if(window.pageYOffset > sticky){
//         header.classList.add("sticky");

      
        
//     }else{
//         header.classList.remove("sticky");
//     }
// }





// Carousel

let slideIndex = 0;

showSlides();

    function showSlides(){
        let i;
        let slides = document.getElementsByClassName("slideshow-overall");
        for(i = 0; i < slides.length;i++){
            slides[i].style.display = "none";

        }

        slideIndex++;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }
        slides[slideIndex-1].style.display= "block";
        setTimeout(showSlides, 2000);
    }




    function show_menu() {
        var menu_overall = document.getElementById("overall-menu-div");
        menu_overall.style.display = "block";
    }

    function hide_menu() {

        var menu_overall = document.getElementById("overall-menu-div");

        menu_overall.style.display = "none";
    }