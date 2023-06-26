var btn_pesq = document.getElementById('pesqui')
var text_a_pesq = document.getElementById('texto_a_pesquisar')

btn_pesq.addEventListener('click', function(){
    window.open(`https://www.google.com/search?client=opera-gx&q=${text_a_pesq.value}`)
})