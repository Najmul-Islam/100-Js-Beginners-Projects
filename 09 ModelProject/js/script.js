(function () {
    const buttons = document.querySelectorAll('.btn');
    const storeItem = document.querySelectorAll('.store-item');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItem.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            })

        })
    })
})();

(function () {
    const searchItem = document.querySelector('#search-item');
    const storeItem = document.querySelectorAll('.store-item');

    searchItem.addEventListener('keyup', (e) => {
        let searchText = e.target.value.toLowerCase().trim();

        storeItem.forEach(item => {
            if (item.textContent.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })
    })
})();

(function () {
    const storItem = document.querySelectorAll('.store-item');
    const lightBox = document.querySelector('.lightbox-container');
    const lightBoxItem = document.querySelector('.lightbox-item');
    const images = document.querySelectorAll('.store-img');

    let imgList = [];
    let imgCounter = 0;

    images.forEach(img => {
        imgList.push(img.src);
    })

    storItem.forEach(item => {
        item.addEventListener('click', e => {
            let img = e.target.src;
            lightBoxItem.style.backgroundImage = `url(${img})`;
            lightBox.classList.add('show');
            imgCounter = imgList.indexOf(img);
        })
    });

    let btnLeft = document.querySelector('.btnLeft');
    btnLeft.addEventListener('click', () => {
        imgCounter--;
        if (imgCounter < 0) {
            imgCounter = imgList.length - 1;
        }
        lightBoxItem.style.backgroundImage = `url(${imgList[imgCounter]})`;
    });

    document.querySelector('.btnRight').addEventListener('click', () => {
        imgCounter++;
        if (imgCounter >= imgList.length) {
            imgCounter = 0;
        }
        lightBoxItem.style.backgroundImage = `url(${imgList[imgCounter]})`;
    });

    document.querySelector('.lightbox-close').addEventListener('click', () => {
        lightBox.classList.remove('show');
    })
})();