window.addEventListener('load', function () {
    let p = document.getElementsByTagName('p');
    if (window.localStorage.pageColor) {
        document.body.style.background = window.localStorage.pageColor;
    }
    if (window.localStorage.fontFamily) {
        for (let i = 0; i < p.length; i++) {
            p[i].style.fontFamily = 'verdana';
            window.localStorage.fontFamily = p[i].style.fontFamily;
        }
    }

    let change = document.getElementById('change');
    let flag = true;

    function changeFon() {
        if (flag) {
            for (let i = 0; i < p.length; i++) {
                p[i].style.fontFamily = 'verdana';
                window.localStorage.fontFamily = p[i].style.fontFamily;
            }
            document.body.style.background = 'lightgrey';
            window.localStorage.pageColor = document.body.style.background;
            flag = false;
        } else {
            for (let i = 0; i < p.length; i++) {
                p[i].style.fontFamily = '';
                window.localStorage.fontFamily = p[i].style.fontFamily;
            }
            document.body.style.background = '';
            window.localStorage.pageColor = document.body.style.background;
            flag = true;
        }
    }

    change.addEventListener('click', changeFon);
});