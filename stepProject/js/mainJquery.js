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
            $(input).show();
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
    const itemsImage = Array.from($('.items-image'));
    const showItems = 12;
    const dataItemsImage = itemsImage.filter((value) => {
        return value.getAttribute('data-amazing-items') === dataItems;
    });
    $(itemsImage).hide();
    const hideButtonAddClass = () => {
        $('.load-more-amazing').hide();
        $('.amazing-items').addClass('margin-bottom');
    };

    if (dataItemsImage.length > showItems) {
        for (let i = 0; i < showItems; i++) {
            $(dataItemsImage).eq(i).fadeIn(700);
        }
        $('.load-more-amazing').show();
    } else if (dataItems === 'all') {
        $(itemsImage).fadeIn(700);
        hideButtonAddClass();
    } else {
        $(dataItemsImage).fadeIn(700);
        hideButtonAddClass();
    }
}

function moveLeft() {
    const currentImage = $('.mini-circle-photo.mini-circle-border');
    const currentImageIndex = currentImage.index();
    const prevImageIndex = currentImageIndex - 1;
    let prevImage = $('.mini-circle-photo').eq(prevImageIndex);
    const bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    if (currentImageIndex === ($('.mini-circle-photo:visible:first').index())) {
        $('.mini-circle-photo').eq(prevImageIndex).show();
        $('.mini-circle-photo').eq(currentImageIndex + 3).hide();
    }
    if ((currentImageIndex) === ($('.mini-circle-photo:first').index())) {
        $('.mini-circle-photo:hidden').show();
        prevImage = $('.mini-circle-photo:last');
        currentImage.hide();
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
    const currentImageIndex = currentImage.index();
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = $('.mini-circle-photo').eq(nextImageIndex);
    const bigPeopleBlock = $('.authors-main-block');

    $(bigPeopleBlock).hide();
    if (currentImageIndex === ($('.mini-circle-photo:visible:last').index())) {
        $('.mini-circle-photo').eq(nextImageIndex).show();
        $('.mini-circle-photo').eq(currentImageIndex - 3).hide();
    }
    if ((currentImageIndex) === ($('.mini-circle-photo:last').index())) {
        $('.mini-circle-photo:hidden').show();
        nextImage = $('.mini-circle-photo').eq(0);
        currentImage.hide();
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
    const allItemsImage = $('.items-image:last').index();
    const hiddenElem = $('.items-image:hidden');
    const dataAmazingItems = $('.active-amazing').data('amazingItems');
    console.log(dataAmazingItems);
    const allElemDataItems = Array.from($('.items-image').filter(function () {
        return $(this).data('amazingItems') === dataAmazingItems;
    }));
    const showItems = 12;

    $('.loader-image').show();
    $('.load-more-amazing').hide();

    setTimeout(function () {
        $('.loader-image').hide();
        $('.load-more-amazing').show();

        if (dataAmazingItems === 'all') {
            for (let i = 0; i < showItems; i++) {
                $(hiddenElem).eq(i).fadeIn(700);
            }
        } else {
            for (let i = showItems; i <= allElemDataItems.length - 1; i++) {
                $(allElemDataItems).eq(i).fadeIn(700);
            }
            $('.load-more-amazing').hide();
            $('.amazing-items').addClass('margin-bottom');
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