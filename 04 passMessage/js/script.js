// (function () {
//     const form = document.querySelector('#message-form');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const inputMessage = document.querySelector('#message');
//         const showVlue = document.querySelector('.message-content')
//         const feedback = document.querySelector('.feedback')

//         if (inputMessage.value === '') {
//             feedback.classList.add('show');
//             setTimeout(function () {
//                 feedback.classList.remove('show');
//             }, 3000)
//         } else {
//             showVlue.textContent = inputMessage.value;
//             inputMessage.value = '';

//         }
//     })
// }())

(function () {
    const form = document.querySelector("#message-form");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const message = document.getElementById('message');
        const feedback = document.querySelector('.feedback');
        const messageContent = document.querySelector('.message-container');

        if (message.value === "") {
            feedback.classList.add('show');
            setTimeout(function () {
                feedback.classList.remove('show')
            }, 3000);
        } else {
            messageContent.textContent = message.value
            message.value = ""
        }


    })
})();