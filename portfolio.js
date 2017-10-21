window.onload = function() {

    var slideContainer = document.querySelector(".preview-slider");
    var imgList = slideContainer.getElementsByTagName("img");
    var counter = 0;

    function showSlide(index) {
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].className = "hide";
        }

        imgList[index].className = "show";
    }

    function nextSlide() {
        if (counter < imgList.length - 1) {
            counter = counter + 1;
        } else {
            counter = 0;
        }

        showSlide(counter);
    }

    function prevSlide() {
        if (counter > 0) {
            counter = counter - 1;
        } else {
            counter = imgList.length - 1;
        }

        showSlide(counter);
    }


    window.setInterval(prevSlide, 2000);
   
    showSlide(counter);
}