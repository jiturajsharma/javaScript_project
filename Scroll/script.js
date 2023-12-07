    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.container');
    
        container.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
            container.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
            });
        } else {
            container.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
            });
        }
        });
    });
