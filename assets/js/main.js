/* Button Fixed */
var buttonElement = document.querySelector('.button-top');

window.addEventListener('scroll', function(e) {
    if (this.window.scrollY === 0) {
        buttonElement.style.display = 'none';
    } else {
        buttonElement.style.display = 'flex';
    }
});