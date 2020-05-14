$('.parallax-window').parallax({
    positionX: '10px',
});
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.inhamburger').classList.toggle('show');
})
document.querySelector('.hamburger-x').addEventListener('click', function() {
    document.querySelector('.inhamburger').classList.toggle('show');
})