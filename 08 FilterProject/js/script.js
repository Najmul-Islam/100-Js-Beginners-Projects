(function () {
    const buttons = document.querySelectorAll('.btn');
    const storeItems = document.querySelectorAll('.store-item');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault()
            const filter = e.target.dataset.filter;

            if (filter === "all") {
                storeItems.forEach(function (item) {
                    item.style.display = "block";
                })
            } else if (filter === "cakes") {
                storeItems.forEach(function (item) {
                    if (item.classList.contains("cakes")) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                })
            } else if (filter === "cupcakes") {
                storeItems.forEach(function (item) {
                    if (item.classList.contains("cupcakes")) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                })
            } else if (filter === "sweets") {
                storeItems.forEach(function (item) {
                    if (item.classList.contains("sweets")) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                })
            } else if (filter === "doughnuts") {
                storeItems.forEach(function (item) {
                    if (item.classList.contains("doughnuts")) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                })
            }
        })
    })
})();

(function () {
    const searchItem = document.querySelector('#search-item');
    const storeItem = document.querySelectorAll('.store-item');

    searchItem.addEventListener('keyup', function (e) {
        const searchResult = e.target.value.toLowerCase().trim();

        storeItem.forEach(function (item) {
            if (item.textContent.includes(searchResult)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })
    })
})();