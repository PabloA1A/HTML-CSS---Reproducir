document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll('.container div');
    let currentIndex = 0;

    function showNextDiv() {
        divs[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % divs.length;
        divs[currentIndex].style.display = 'block';
    }

    for (let i = 1; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    setInterval(showNextDiv, 2000);
});