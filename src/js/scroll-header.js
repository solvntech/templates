const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByClassName('header')[0];

window.onscroll = function () {
    const scroll = window.pageYOffset;
    if (scroll > 50) {
        header.style.height = '70px';
    } else {
        header.style.height = '110px';
    }
}
