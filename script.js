var h = document.querySelector('p#hora')
var imagem = document.querySelector('img#img')
var horahoje = new Date()
var hh = horahoje.getHours()
var mensagem = document.querySelector('p#msn')

h.innerHTML+=`${hh} horas.`

if(hh>=00 && hh<12){
    mensagem.innerHTML=`<strong>BOM DIA</strong>`
    imagem.src = 'asses/bom_dia.jpg'
    document.body.style.background=`rgb(249, 252, 209)`
}else if(hh>=12 && hh<18){
    mensagem.innerHTML=`<strong>BOA TARDE</strong>`
    imagem.src='asses/tarde.jpg'
    document.body.style.background='rgb(165, 190, 235)'
}else if(hh>=18 && hh<=24){
    mensagem.innerHTML=`<strong>BOA NOITE</strong>`
    imagem.src='asses/noite.jpg'
    document.body.style.background='rgb(70, 70, 70)'
}