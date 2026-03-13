var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');

    let i = 1;
    var repeater = function() {
        setTimeout(function() {
            // [...active].forEach(function(activeSlide) {
            //     activeSlide.classList.remove('active');
            // });

            // slide[i].classList.add('active');
            // buttons[i].classList.add('active');
            // i++

            // if(slides.length == i) {
            //     i = 0;
            // };
            // if(i >= slides.length) {
            //     return;
            // };

            slides.forEach(slide => slide.classList.remove('active'));
            buttons.forEach(btn => btn.classList.remove('active'));

            slides[i].classList.add('active');
            buttons[i].classList.add('active');
            i++

            if (i >= slides.length) {
                i = 0;
            }

            repeater();
        }, 2000);
    }
    repeater();
}
repeat();