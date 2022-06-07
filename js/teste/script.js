    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('res')

    var genero = ''
    var img = document.createElement('img')

function checar1() { 
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero ='homem' 
        img.setAttribute('src','leon.png.jpg')
    }
    else if (fsex[1].checked) { 
        genero='mulher'
        img.setAttribute('src','ashley.png.jpg')
    }
    res.appendChild(img)    
}