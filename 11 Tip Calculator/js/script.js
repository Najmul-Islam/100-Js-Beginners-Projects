(function () {
    const services = [
        {
            value: 1,
            title: "great - 20%"
        },
        {
            value: 2,
            title: "good - 10%"
        },
        {
            value: 3,
            title: "bad - 2%"
        }
    ]

    const validateInput = function (billamount, numUsers, selectServece) {
        let isFeedback = false;
        const feedback = document.querySelector('.feedback');
        feedback.innerHTML = "";

        if (billamount === '' || billamount <= "0") {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.innerHTML += `<p>Bill amount cannot be blank</p>`;
            isFeedback = true;
        }

        if (numUsers <= "0") {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.innerHTML += `<p>Number of users must be greater than zero</p>`;
            isFeedback = true;
        }

        if (selectServece === "0") {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.innerHTML += `<p>You must select a Service</p>`;
            isFeedback = true;
        }

        setTimeout(function () {
            feedback.classList.remove('showItem', 'alert-danger');
        }, 1000)

        return isFeedback;
    }

    const calculateTip = function (billamount, numUsers, selectServece) {
        let parcentTip = '';

        if (selectServece === '1') {
            parcentTip = 0.2;
        } else if (selectServece === '2') {
            parcentTip = 0.1;
        } else {
            parcentTip = 0.02;
        }

        const tipAmount = Number(billamount) * parcentTip;
        const totalAmount = Number(billamount) * Number(tipAmount);
        const eachPerson = Number(totalAmount) / Number(numUsers);

        return [tipAmount, totalAmount, eachPerson];
    };

    services.forEach(function (service) {
        const option = document.createElement('option');
        option.textContent = service.title;
        option.value = service.value;

        const select = document.querySelector('#input-service');
        select.appendChild(option);
    })

    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputBill = document.querySelector('#input-bill');
        const inputUsers = document.querySelector('#input-users');
        const serviceValue = document.querySelector('#input-service');

        let billamount = inputBill.value;
        let numUsers = inputUsers.value;
        let selectServece = serviceValue.value;

        const isFeedback = validateInput(billamount, numUsers, selectServece);

        if (!isFeedback) {
            const loader = document.querySelector('.loader');
            const resultDOM = document.querySelector('.results');
            const tipResultDOM = document.querySelector('#tip-amount');
            const totalAmount = document.querySelector('#total-amount');
            const eachPerson = document.querySelector('#person-amount');

            const result = calculateTip(billamount, numUsers, selectServece);

            loader.classList.add('showItem');

            setTimeout(function () {
                loader.classList.remove('showItem');
                tipResultDOM.textContent = `${result[0].toFixed(2)}`;
                totalAmount.textContent = `${result[1].toFixed(2)}`;
                eachPerson.textContent = `${result[2].toFixed(2)}`;
                resultDOM.classList.add('showItem');

            }, 2000);

            setTimeout(function () {
                inputBill.value = '';
                inputUsers.value = '';
                serviceValue.value = 0;
                resultDOM.classList.remove('showItem');
            }, 1000);
        }

    })

})();