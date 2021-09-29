//--------------------------------------------------//
//----------- Obsługa menu i slidera  -------------//
//-------------------------------------------------//

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


$('.mobile-menu-btn').click(function () { 
    $(this).toggleClass('active');
    $('.logo').toggleClass('active');
    $('.mobile-menu').toggleClass('active');

});



//-----------------------------------//
//----------- Licznik  -------------//
//----------------------------------//


function counter(start, end, obj, time){
    let timeI = time / end;
    let fun = setInterval(() => {
        obj.innerHTML = `${start}`;
        if(start < end){
            start++;
        }else{
            clearInterval(fun);
        }
    },  timeI );

}

const posXcounter =  $('.counter').offset().top;
const elementsCount = document.querySelectorAll('.counter');

// let destnumber = parseInt( elementsCount[0].getAttribute('final-val') );
// console.log( parseInt( elementsCount[0].getAttribute('time-anim') ) );


let disable = false;

    $(window).scroll(function(e){
        let posScroll = this.scrollY;
        let height = this.visualViewport.height * 0.8;
    
        if ( scrollY + height > posXcounter && !disable ) {
            disable = true;
            elementsCount.forEach( (element)=>{
               let end = parseInt( element.getAttribute('final-val') );
               let time = parseInt( element.getAttribute('time-anim') );  // 1s -> 1000ms
               counter(0, end, element, time)
            });
        }
    })

//-----------------------------------//
//----------- Accordion  -------------//
//----------------------------------//


$('.accordion__item').click( function(){
    let heightHederA = $('.accordion__header').innerHeight() + 25;
    let heightImgA = $('.accordion__img').innerHeight();
    let availableHeight = heightImgA - heightHederA * 3;

    $(this).children().toggleClass('active');
    $(this).children().toggleClass('disable');
    $(this).children('.accordion__description.active').css('height', availableHeight);
    $(this).children('.accordion__description.disable').css('height', 0);
})

//-----------------------------------//
//----------- Carusel   -------------//
//----------------------------------//