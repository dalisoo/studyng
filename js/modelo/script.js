function carregar() { 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = ` Agora são ${hora} horas e ${min} minutos.`

 if (hora >=0 && hora <12) { 
     img.src = 'bomdia.png'
     document.body.style.background='#be935d'
 } else if ( hora >=12 && hora <18) { 
     img.src ='boatarde.png'
     document.body.style.background='#afafaf'

 } else { 
     img.src = 'boanoite.png'
     document.body.style.background='rgb(30 28 27)'

 }
}