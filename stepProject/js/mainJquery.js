$('.show').hide();

function showOurServices() {
    let liList = $('.li-list');
    for (let input of liList) {
        if ($(input).hasClass('active')) {
            $(input).removeClass('active');
        }
    }
    $(this).addClass('active');

    let dataNumber = $(this).data('number');

    let servicesMenu = $('.services-menu-content');
    for (let input of servicesMenu) {
        $(input).hide();
        if ($(input).data('number') === dataNumber) {
            $(input).show();
        }
    }
}

$('.li-list').on('click', showOurServices);

function showOurAmazingWork() {
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
            $(input).show();
        } else if (dataItems === 'all') {
            console.log($(input));
            $(input).show();
        }
    }
}

// function loadMore() {
//     let itemsImage = $('.amazing-items .items-image');
//     console.log(itemsImage);
//
// }

$('.li-amazing').on('click', showOurAmazingWork);
// $('.load-more').on('click', loadMore);