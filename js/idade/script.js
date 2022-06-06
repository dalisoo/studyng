function verificar() { 
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if ( fano.value.length == 0 || Number(fano.value) > ano ) { 
        window.alert('[ERROR] Verifique novamente as informações')

    }
    else { 
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero =  ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if ( fsex[0].checked) {
         genero = 'homem'
         if ( idade >=0 && idade < 16 ) // CRIANÇA
            { img.setAttribute('src' , 'criança-m.png') } 
         else if ( idade < 30 ) { 
             img.setAttribute('src', 'jovem-m.png')
         }
         else {
             img.setAttribute('src', 'idoso-m.png')
         }   
    
     }
     else if (fsex[1].checked) { 
         genero = 'mulher'

         if ( idade >=0 && idade < 16 ) // CRIANÇA
            { img.setAttribute('src' , 'criança-f.png') } 
         else if ( idade < 30 ) { 
             img.setAttribute('src', 'jovem-f.png')
         } 
         else {
            img.setAttribute('src', 'idoso-f.png')
         }   
     }
     res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img)
    
    }
    
}
