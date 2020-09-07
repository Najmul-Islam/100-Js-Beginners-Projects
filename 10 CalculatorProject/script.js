(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            if (screen.value === "Please inter value") {
                screen.value = "";
                let value = e.target.dataset.num;
                screen.value += value;
            } else {
                let value = e.target.dataset.num;
                screen.value += value;
            }
        })
    })

    equal.addEventListener('click', e => {
        if (screen.value === "") {
            screen.value = "Please inter value";
        }
        else {
            let result = eval(screen.value);
            screen.value = result;
        }
    })

    clear.addEventListener('click', e => {
        screen.value = '';
    })
})();