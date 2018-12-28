let tegA = document.getElementsByTagName('a');
for (let i = 0; i < tegA.length; i++) {
    tegA[i].addEventListener('click', function (e) {
        e.preventDefault();
    });
}

let hideAuthors = document.getElementsByClassName('hide-authors');
let hideAuthorsMini = document.getElementsByClassName('hide-authors-mini');
let loader = document.getElementsByClassName('loader');
let show = document.getElementsByClassName('show');
let itemsImage = document.getElementsByClassName('items-image');
let hideBestImage = document.getElementsByClassName('hide-best-image');

const applyHiddenClass = (cls, length = cls.length, count = 0) => {
    for (let i = count; i < length; i++) {
        cls[i].style.display = 'none';
    }
};
applyHiddenClass(hideAuthors);
applyHiddenClass(hideAuthorsMini);
applyHiddenClass(loader);
applyHiddenClass(itemsImage, 36, 12);
applyHiddenClass(hideBestImage);
applyHiddenClass(show);

window.addEventListener('load', function () {
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer',
    });
});

function showOurServices() {
    if (this.classList.contains('active')) {
        return;
    }
    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('active');
    }
    this.classList.add('active');
}

let liList = document.getElementsByClassName('li-list');
for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click', showOurServices);
}



