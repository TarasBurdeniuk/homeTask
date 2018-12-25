$('.hide-authors,.hide-authors-mini,.loader,.show,.items-image,.hide-best-image').hide();

$('a').on('click', function (e) {
    e.preventDefault();
});

$(document).ready(setMiddleImage);
$(document).ready(loadMoreAmazingStart);

$(document).ready(function () {
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer',
    });
});

function loadMoreAmazingStart() {
    let j = 12;
    for (let i = 0; i < j; i++) {
        $('.items-image').eq(i).show();
    }
}

function setMiddleImage() {
    $('.mini-circle-photo:visible').removeClass('mini-circle-border');
    let activeImage = $('.mini-circle-photo:visible');
    $(activeImage).eq(1).addClass('mini-circle-border');

    let people = $(activeImage).eq(1).data('people');
    let bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === people) {
            $(input).show();
        }
    }
}

function showOurServices() {
    if ($(this).hasClass('active')) {
        return;
    }
    $('.li-list').removeClass('active');
    $(this).addClass('active');

    let dataNumber = $(this).data('number');

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

    let liListAmazing = $('.li-amazing');
    for (let input of liListAmazing) {
        if ($(input).hasClass('active-amazing')) {
            $(input).removeClass('active-amazing');
        }
    }
    $(this).addClass('active-amazing');

    let dataItems = $(this).data('amazingItems');
    let itemsImage = $('.items-image');

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
    let currentImage = $('.mini-circle-photo.mini-circle-border');
    let currentImageIndex = $('.mini-circle-photo.mini-circle-border').index();
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = $('.mini-circle-photo').eq(prevImageIndex - 1);
    let bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    if ((currentImageIndex) === ($('.mini-circle-photo:first').index())) {
        $('.mini-circle-photo:hidden').show();
        $('.mini-circle-photo:last').addClass('mini-circle-border');
        $('.mini-circle-photo').eq(prevImageIndex).hide();
        $('.mini-circle-photo').eq(currentImageIndex).hide();
    }
    if (prevImageIndex === ($('.mini-circle-photo:visible:first').index() - 1)) {
        currentImage.removeClass('mini-circle-border');
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
    let currentImage = $('.mini-circle-photo.mini-circle-border');
    let currentImageIndex = $('.mini-circle-photo.mini-circle-border').index();
    let nextImageIndex = currentImageIndex;
    let nextImage = $('.mini-circle-photo').eq(nextImageIndex);
    let bigPeopleBlock = $('.authors-main-block');
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
    let people = $(this).data('people');
    let bigPeopleBlock = $('.authors-main-block');
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
    let allItemsImage = $('.items-image:last').index();

    if ((lastVisIndex + 1) === 12) {
        j = 24;
    } else if ((lastVisIndex + 1) === 24) {
        j = 36;
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
            console.log('asd');
            $('.amazing-items').addClass('margin-bottom');
        }
    }, 2000);
}

function loadMore() {
    let hiddenImage = Array.from($('.hide-best-image'));
    let j = 5;

    if (hiddenImage.length < 1) {
        return;
    }

    $('.loader').show();
    $('.load-more-hide').hide();

    setTimeout(function () {
        $('.loader').hide();
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