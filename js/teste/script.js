var img1 = document.getElementById('hero')
var Perso1 = document.getElementById('phoenix')
var Perso3 = document.getElementById('jett')
var Perso2 = document.getElementById('raze')
var Perso4 = document.getElementById('fade')
var fsex = document.getElementsByName('radsex')


function verificar() { 
    if ( fsex[0].checked) { 
        img1.style.backgroundImage='url(img/phoenix2.png)'
        img1.style.transitionDuration='1s'
    }
    else if ( fsex[1].checked) { 
        img1.style.backgroundImage='url(img/jett.png)'
        img1.style.transitionDuration='1s'
    }
    else if (fsex[2].checked) { 
        img1.style.backgroundImage='url(img/raze.png)'
        img1.style.transitionDuration='1s'
    }
    else if (fsex[3].checked) { 
        img1.style.backgroundImage='url(img/fade.png)'
        img1.style.transitionDuration='1s'
    }
}