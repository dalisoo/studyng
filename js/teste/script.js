    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('res')

    var genero = ''
    var img = document.createElement('img')

function verificar() { 
    var nome = document.getElementById('txt1').value;

    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero ='homem' 
        img.setAttribute('src','leon.png.jpg')
    }
    else if (fsex[1].checked) { 
        genero='mulher'
        img.setAttribute('src','ashley.png.jpg')
    }
    res.innerHTML= `Olá ${nome} verificamos que você é ${genero}`
    res.appendChild(img)    
}