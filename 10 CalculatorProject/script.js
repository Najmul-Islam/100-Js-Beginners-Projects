(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            let value = e.target.dataset.num;
            screen.value += value;

        })
    })

    equal.addEventListener('click', e => {
        let result = eval(screen.value);
        screen.value = result;
    })

    clear.addEventListener('click', e => {
        screen.value = '';
    })
})();