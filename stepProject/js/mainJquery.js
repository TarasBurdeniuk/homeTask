$('.hide-authors,.hide-authors-mini,.loader,.show,.items-image,.hide-best-image').hide();

$('a').on('click', function (e) {
    e.preventDefault();
});

$(document).ready(loadMoreAmazingStart);

$(document).ready(function () {
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer'
    });
});

function loadMoreAmazingStart() {
    const j = 12;
    for (let i = 0; i < j; i++) {
        $('.items-image').eq(i).show();
    }
}

function showOurServices() {
    if ($(this).hasClass('active')) {
        return;
    }
    $('.li-list').removeClass('active');
    $(this).addClass('active');

    const dataNumber = $(this).data('number');

    let servicesMenu = $('.services-menu-content');
    for (let input of servicesMenu) {
        $(input).hide(500);
        if ($(input).data('number') === dataNumber) {
            $(input).show(500);
        }
    }
}

function showOurAmazingWork() {
    $('.load-more-amazing').show();
    $('.amazing-items').removeClass('margin-bottom');

    const liListAmazing = $('.li-amazing');
    for (let input of liListAmazing) {
        if ($(input).hasClass('active-amazing')) {
            $(input).removeClass('active-amazing');
        }
    }
    $(this).addClass('active-amazing');

    const dataItems = $(this).data('amazingItems');
    const itemsImage = $('.items-image');

    for (let input of itemsImage) {
        $(input).hide();
        if ($(input).data('amazingItems') === dataItems) {
            $(input).fadeIn(700);
        } else if (dataItems === 'all') {
            $(input).fadeIn(700);
            $('.load-more-amazing').hide();
            $('.amazing-items').addClass('margin-bottom');
        }
    }
}

function moveLeft() {
    const currentImage = $('.mini-circle-photo.mini-circle-border');
    const currentImageIndex = $('.mini-circle-photo.mini-circle-border').index();
    const prevImageIndex = currentImageIndex - 1;
    const prevImage = $('.mini-circle-photo').eq(prevImageIndex - 1);
    const bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    if ((currentImageIndex) === ($('.mini-circle-photo:first').index())) {
        $('.mini-circle-photo:hidden').show();
        $('.mini-circle-photo:last').addClass('mini-circle-border');
        $('.mini-circle-photo').eq(prevImageIndex).hide();
        $('.mini-circle-photo').eq(currentImageIndex).hide();
    }
    if (prevImageIndex === ($('.mini-circle-photo:visible:first').index() - 1)) {
        $('.mini-circle-photo').eq(prevImageIndex - 1).addClass('mini-circle-border').show();
        $('.mini-circle-photo').eq(prevImageIndex + 2).hide();
    }

    currentImage.removeClass('mini-circle-border');
    prevImage.addClass('mini-circle-border');
    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === $('.mini-circle-photo.mini-circle-border').data('people')) {
            $(input).fadeIn(700);
        }
    }
}

function moveRight() {
    const currentImage = $('.mini-circle-photo.mini-circle-border');
    const currentImageIndex = $('.mini-circle-photo.mini-circle-border').index();
    const nextImageIndex = currentImageIndex;
    const nextImage = $('.mini-circle-photo').eq(nextImageIndex);
    const bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    if (currentImageIndex === ($('.mini-circle-photo:visible:last').index())) {
        $('.mini-circle-photo').eq(currentImageIndex).show().addClass('mini-circle-border');
        $('.mini-circle-photo').eq(currentImageIndex - 3).hide();
    }
    if ((nextImageIndex + 1) === ($('.mini-circle-photo:last').index() + 1)) {
        $('.mini-circle-photo:hidden').show();
        $('.mini-circle-photo').eq(0).addClass('mini-circle-border');
        $('.hide-authors-mini').hide();
    }
    currentImage.removeClass('mini-circle-border');
    nextImage.addClass('mini-circle-border');
    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === $('.mini-circle-photo.mini-circle-border').data('people')) {
            $(input).fadeIn(700);
        }
    }
}

function showPeople() {
    const people = $(this).data('people');
    const bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === people) {
            $(input).fadeIn(700);
        }
    }

    $('.mini-circle-photo').removeClass('mini-circle-border');
    $(this).addClass('mini-circle-border');
}

function loadMoreAmazing() {
    let lastVisIndex = $('.items-image:visible:last').index();
    let j = 12;
    const allItemsImage = $('.items-image:last').index();
    const hiddenElem = $('.items-image:hidden');

    if ((lastVisIndex + 1) === 12) {
        j = 24;
    } else if ((lastVisIndex + 1) === 24) {
        j = 36;
    }
    const num = 12;
    if (hiddenElem.length % num) {
        return;
    }
    $('.loader-image').show();
    $('.load-more-amazing').hide();

    setTimeout(function () {
        $('.loader-image').hide();
        $('.load-more-amazing').show();
        for (let i = 0; i < j; i++) {
            $('.items-image').eq(i).show();
        }
        lastVisIndex = $('.items-image:visible:last').index();

        if (allItemsImage === lastVisIndex) {
            $('.load-more-amazing').hide();
            $('.amazing-items').addClass('margin-bottom');
        }
    }, 2000);
}

function loadMore() {
    const hiddenImage = $('.hide-best-image');
    const j = 5;

    if (hiddenImage.length < 1) {
        return;
    }

    $('.load-more-hide').hide();
    $('.loader').eq(1).show();

    setTimeout(function () {
        $('.loader').eq(1).hide();
        $('.load-more-hide').show();
        for (let i = 0; i < j; i++) {
            $(hiddenImage).eq(i).fadeIn(500).removeClass('hide-best-image');
        }
        $('.grid').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: '.gutter-sizer',
        });
    }, 2000);
}

$('.li-list').on('click', showOurServices);
$('.left').on('click', moveLeft);
$('.right').on('click', moveRight);
$('.mini-circle-photo').on('click', showPeople);
$('.li-amazing').on('click', showOurAmazingWork);
$('.load-more-amazing').on('click', loadMoreAmazing);
$('.load-more-hide').on('click', loadMore);