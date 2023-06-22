const titulo1= document.getElementById('titulo1')
//titulo1.innerText = 'DOM'
titulo1.innerHTML = 'Manipulando &lt; &gt; <br> o DOM'
titulo1.style.color = 'blue'
titulo1.style.fontSize = '80px'
//titulo1.remove()//remove um elemento

//Selecionando elemento pela tag
const paragrafos = document.getElementsByTagName('p')
paragrafos[0].innerText = 'Primeiro Parágrafo'
paragrafos[1].innerText = 'Segundo Parágrafo'
paragrafos[2].innerText = 'Terceiro Parágrafo'
//paragrafos[3].innerText = 'Quarto Parágrafo'


for(let i = 0; i < paragrafos.length; i++){
paragrafos[i].style.color = 'blue'
}
//Selecionando o elemento pelo atributo name
const textos = document.getElementsByName('texto')
textos[0].style.fontWeight = 'bold'
textos[1].style.fontStyle = 'italic'
//Selecionando pelo seletor
const titulo2 = document.querySelector('main h2')
titulo2.innerText = 'Segundo Titulo'

const todosTitulos= document.querySelectorAll('h2')
todosTitulos[2].innerText = 'Terceiro Titulo'

function trocaImagem(){
const img= document.querySelector('img')
img.src = 'jsp2.png'

}
function voltaImagem(){
    const img = document.querySelector('img')
    img.src = 'JSp.jpeg'

}
const link = document.querySelector('a')
link.textContent = 'Site do Google'
link.href = 'https://google.com'
link.target = '_blank'

const minhaHeader = document.querySelector('header')
minhaHeader.style.background = 'black'
minhaHeader.style.color = 'white'
minhaHeader.style.width = '50%'
minhaHeader.style.padding = '5%'
minhaHeader.style.margin = '0 auto'

function inserir(){
    const li = document.createElement('li')
    const club = document.getElementById('club').value
    li.innerText= club
    if (club != ''){
        const lista = document.getElementById('listaTimes')
        lista.appendChild(li)
    }else{
        alert('Digite o nome do time.')
    }
    document.getElementById('club').value = ''
    document.getElementById('club').focus()
    
}
function remover(){
    const li = document.querySelectorAll('li')
    const clubRemove = document.getElementById('clubRemove').value
    let achou = false
    for(let i = 0; i < li.length; i++){
        if(li[i].textContent == clubRemove){
            li[i].remove()
            achou = true
        }
    }
    if(achou == false){
        alert('Time Não encontrado.')
        document.getElementById('clubRemove').focus()
    }
    document.getElementById('clubRemove').value = ''
    
}
function mudaCor(){
    const h3 = document.querySelector('h3')
//    h3.classList.add('fundoAzul') //Adiciona CLase
//    h3.classList.remove('fundoAzul') // Remove Classe
h3.classList.toggle('fundoAzul') //Adiciona e remove
}

const btn = document.getElementById('btn')
btn.innerText = 'Texto botão'
btn.addEventListener('click',mudaCor) //Adiciona Evento click
btn.removeEventListener('click',mudaCor) //Remove Evento click