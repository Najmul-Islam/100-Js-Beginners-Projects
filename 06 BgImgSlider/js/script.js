(function () {
    const images = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
    ];

    const buttons = document.querySelectorAll('.btn');
    const imgContainer = document.querySelector('.img-container')
    let counter = 0;

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains("btn-left")) {
                counter--
                if (counter < 0) {
                    counter = images.length - 1;
                }
                imgContainer.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
            }
            if (button.classList.contains("btn-right")) {
                counter++
                if (counter > images.length - 1) {
                    counter = 0;
                }
                imgContainer.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
            }
        })
    })
})();