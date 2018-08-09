$(document).ready(function() {
    $('.colorBadgeTopS, .colorBadgeTopL').fadeIn(1500).fadeOut(4000);
    function showTitle() {
        $('.title').css('filter', 'opacity(100%)');
    }
    setTimeout(showTitle, 5500);
    
    function activeCheck() {
        if($('.ss').hasClass('active')) {
              $( ".contentS2" ).animate({
                opacity: 1,
              }, 1160);
        }
    }
    setInterval(activeCheck, 1000);
    
    $('#fullpage').fullpage({
        anchors: ['block1', 'block2', 'block3', 'block4'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 900
    });
    
    function passStrong()  {
        var hasNumber = /\d/;
        var secondIn = $('.secondInput').val();
        if($('.secondInput').val()) {
            var secondInVal = $('.secondInput').val().length;
        }
        var passCheckVal = $('.passCheck').val();
        var ls = localStorage.getItem('cabinetLS');
        var firstInput = $('.firstInput').val();
        
        if($('.btn-success').length) {
            if(ls == firstInput || firstInput.length > 12 ) {
                $('.firstInput').css('background-color', '#ffcece');
            } else if(ls !== firstInput && firstInput.length !== 0) {
                $('.firstInput').css('background-color', '#d8ffce');
            } else {
                $('.firstInput').css('background-color', 'white');
            }
        }  
        
        if($('.secondInput').val()) {
            if($('.secondInput').val().length === 0) {
        
            } else {
                if(secondIn === passCheckVal) {
                    $('.secondInput, .passCheck').css('border', '1px solid #82d16a');
                } else {
                    $('.secondInput, .passCheck').css('border', '1px solid #ff9f9e');
                }
            }
        }
        
        if(secondInVal > 12 && hasNumber.test(secondIn) === true ) {
            $('.secondInput').css('background-color', '#c4ffda');
        } else if(secondInVal > 6) {
            $('.secondInput').css('background-color', '#ffeec4');
        } else if(secondInVal >= 1) {
            $('.secondInput').css('background-color', '#ffcac4');
        } else {
            $('.secondInput').css('background-color', 'white');
        }
    }
    if( $('.btn-success').length ) {
        setInterval(passStrong, 800);
    }
    
    $('.btn-success').click(function() {
        var ls = localStorage.getItem('cabinetLS');
        var secondIn = $('.secondInput').val();
        var firstInValLength = $('.firstInput').val().length;
        var passCheckVal = $('.passCheck').val();
        if( $( '.firstInput' ).val()  && $('.secondInput').val() && $( '.firstInput' ).val() !== ls && secondIn === passCheckVal && firstInValLength < 12 ) {
            var firstInVal = $('.firstInput').val();
            var secondInVal = $('.secondInput').val();
            localStorage.setItem('cabinetL', firstInVal);
            localStorage.setItem('cabinetLS', firstInVal);
            localStorage.setItem('cabinetP', secondInVal);
            var ls = localStorage.getItem('cabinetLS');
            
            $('body').hide('slow');
            function replace() {
                $('body').replaceWith("<body><div class='text-center'><h1 class='account'>Your account</h1><h2 class='mt-4 text-center text-primary'>Hello, " + firstInVal + "!</h2><br><p class='time'>Time: </p><button class='mt-3 btn btn-danger px-4'>Sign out</button></div></body>");
                $('html').addClass('bg-acc');
                
                $('.btn-danger').click(function() {
                    localStorage.removeItem('cabinetL');
                    location.reload();
                })
            }
            setTimeout(replace, 410);
        } else if( $('.firstInput').val() && !$('.secondInput').val() && !$('.passCheck').val() ) {
            $('.secondInput, .passCheck').css('border', '1px solid red');
            function callback() {
                $('.secondInput, .passCheck').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        } else if( $('.secondInput').val() && !$('.firstInput').val() && !$('.passCheck').val() ) {
            $('.firstInput, .passCheck').css('border', '1px solid red');
            function callback() {
                $('.firstInput, .passCheck').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        } else if( $('.passCheck').val() && !$('.firstInput').val() && !$('.secondInput').val() ) {
            $('.firstInput, .secondInput').css('border', '1px solid red');
            function callback() {
                $('.firstInput, .secondInput').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        } else if( $('.secondInput').val() && $('.passCheck').val() && !$('.firstInput').val() ) {
            $('.firstInput').css('border', '1px solid red');
            function callback() {
                $('.firstInput').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        } else if( $('.firstInput').val() == ls ) {
            $('.firstInput').css('border', '1px solid red');
            function callback() {
                $('.firstInput').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        } else if(secondIn !== passCheckVal ) {
            $('.secondInput, .passCheck').css('border', '1px solid red');
            function callback() {
                $('.secondInput, .passCheck').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        } else {
            $('input').css('border', '1px solid red');
            function callback() {
                $('input').css('border', '1px solid #e0e0e0');
            }
            setTimeout(callback, 2500);
        }
    })
    
    $('.btn-primary').click(function() {
        if( $( '.firstInput' ).val() && $('.secondInput').val() ) {
            var firstInVal = $('.firstInput').val();
            var secondInVal = $('.secondInput').val();
            
            localStorage.setItem('cabinetL', firstInVal);
            
            var login = localStorage.getItem('cabinetLS', firstInVal);
            var password = localStorage.getItem('cabinetP', secondInVal);
            
            if( firstInVal == login && secondInVal == password ) {
                $('body').hide('slow');
                function replace() {
                    $('body').replaceWith("<body><div class='text-center'><h1 class='account'>Your account</h1><h2 class='mt-4 text-center text-primary'>Hello, " + firstInVal + "!</h2><br><p class='time'>Time: </p><button class='mt-3 btn btn-danger px-4'>Sign out</button></div></body>");
                    $('html').addClass('bg-acc');

                    $('.btn-danger').click(function() {
                        localStorage.removeItem('cabinetL');
                        location.reload();
                    })
                }
                setTimeout(replace, 410);
            } else if(firstInVal !== login && secondInVal == password) {
                $('.firstInput').css('border', '1px solid red');
                function callback() {
                    $('.firstInput').css('border', '1px solid #e0e0e0');
                }
                setTimeout(callback, 3000);
            } else if(firstInVal == login && secondInVal !== password) {
                $('.secondInput').css('border', '1px solid red');
                function callback() {
                    $('.secondInput').css('border', '1px solid #e0e0e0');
                }
                setTimeout(callback, 3000);
            } else {
                $('input').css('border', '1px solid red');
                function callback() {
                    $('input').css('border', '1px solid #e0e0e0');
                }
                setTimeout(callback, 3000);
            }
        } else if( $('.firstInput').val() && !$('.secondInput').val() ) {
            alert('Введите пароль');
        } else if( $('.secondInput').val() && !$('.firstInput').val() ) {
            alert('Введите логин');
        } else {
            alert('Введите данные');
        }
    })
    
    if('cabinetL' in localStorage) {
        var login = localStorage.getItem('cabinetL');
        $('body').replaceWith("<body><div class='text-center'><h1 class='account'>Your account</h1><h2 class='mt-4 text-center text-primary'>Hello, " + login + "!</h2><br><p class='time'>Time: </p><button class='mt-3 btn btn-danger px-4'>Sign out</button></div></body>");
        $('html').addClass('bg-acc');
    }
    
    $('.btn-danger').click(function() {
        localStorage.removeItem('cabinetL');
        location.reload();
    })
})

function displayTime() {
    var dt = new Date();
    $('.time').html("Time: " + dt.toLocaleTimeString());
    setTimeout("displayTime()", 1000);
}
    
$(function() {
    setTimeout("displayTime()", 1000);
})
