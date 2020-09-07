(function () {
    const coustomerImg = document.querySelector('#customer-img');
    const coustomerName = document.querySelector('#customer-name');
    const coustomerText = document.querySelector('#customer-text');
    const buttons = document.querySelectorAll('.btn');

    const coustomers = [];
    let index = 0;

    function Coustomer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function newCoustomer(img, name, text) {
        let newImg = `./img/customer-${img}.jpg`;
        coustomer = new Coustomer(newImg, name, text);

        coustomers.push(coustomer);
    }
    newCoustomer(0, "Najmul", "0Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatumillo? Quae fugiataspernatur harum aperiam, quis eos officia.");
    newCoustomer(1, "Noman", "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo vel! Qui repellendus neque aliquam ab rem! Sed corrupti porro omnis pariatur quaerat similique, tempore facere ad neque, et molestias?");
    newCoustomer(2, "Balal", "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsa ratione, reprehenderit in assumenda itaque ullam, exercitationem facere officiis cupiditate necessitatibus? Modi voluptatibus architecto possimus, aliquam sit ipsam voluptas dolorum?");
    newCoustomer(3, "Anwar", "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem repellendus voluptates odio non dolor a nemo! Quisquam, ab voluptatibus.");
    newCoustomer(4, "Raju", "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatu illo? Quae fugiat aspernatur harum aperiam, quis eos officia.");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains("prevBtn")) {
                if (index === 0) {
                    index = coustomers.length
                }
                index--
                coustomerImg.src = coustomers[index].img;
                coustomerName.textContent = coustomers[index].name;
                coustomerText.textContent = coustomers[index].text;
            }
            if (e.target.parentElement.classList.contains("nextBtn")) {
                index++
                if (index === coustomers.length) {
                    index = 0;
                }
                coustomerImg.src = coustomers[index].img;
                coustomerName.textContent = coustomers[index].name;
                coustomerText.textContent = coustomers[index].text;
            }


        })
    })

})();