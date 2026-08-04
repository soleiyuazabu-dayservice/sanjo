window.addEventListener("load", function () {

    const images = [
        "images/viw-web.jpeg",
        "images/GPT3-web.jpeg",
        "images/hall4-web.jpeg"
    ];

    let current = 0;

    const heroImage = document.getElementById("heroImage");

    setInterval(function () {

        heroImage.style.opacity = 0;

        setTimeout(function () {

            current = (current + 1) % images.length;
            heroImage.src = images[current];

            heroImage.style.opacity = 1;

        }, 1000);

    }, 6000);

});


// 右クリック禁止
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});