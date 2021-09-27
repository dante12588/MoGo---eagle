const slider = $('.slider');
const sleapTime = 5000;
const animTime = 1000;
const numOfSlides = slider.children().length;
let count = 1;
$(`.slider-cout .s${count}`).addClass('active');
setInterval(() => {

    $(`.slider-cout .s4`).removeClass('active')
    $(`.slider-cout .s${count}`).removeClass('active')
    slider.animate({
        marginLeft: '-=100vw'
    }, animTime, function(){
        $(`.slider-cout .s${count + 1}`).addClass('active')
        count++;
        if( count === numOfSlides ){
            count = 1;
            $(this).css('margin-left', '0px');
            $(`.slider-cout .s${count}`).addClass('active');
        }
    });


}, sleapTime);
