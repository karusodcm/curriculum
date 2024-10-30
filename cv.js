const desformacion = document.getElementById('desformacion')
const cloformacion = document.getElementById('cloformacion')
const forma = document.querySelectorAll('.forma')

desformacion.addEventListener('click', ()=>{
    forma.forEach((items)=>{
        items.style.display ='none'
    })
    desformacion.style.display ='none'
    cloformacion.style.display ='inline'
})

cloformacion.addEventListener('click', ()=>{
    forma.forEach((items)=>{
        items.style.display ='flex'
    })
    desformacion.style.display ='inline'
    cloformacion.style.display ='none'
})

const desexperiencia = document.getElementById('desexperiencia')
const completeall = document.querySelectorAll('.ori')
const cloexperiencia = document.getElementById('cloexperiencia')

desexperiencia.addEventListener('click', ()=>{
    for (let i=0;i<completeall.length;i++){
        completeall[i].style.display = "none"
    }
    desexperiencia.style.display ='none'
    cloexperiencia.style.display ='inline'
})

cloexperiencia.addEventListener('click', ()=>{
    for (let i=0;i<completeall.length;i++){
        completeall[i].style.display = "flex"
    }
    desexperiencia.style.display ='inline'
    cloexperiencia.style.display ='none'
})

const desestudios = document.getElementById('desestudios')
const estudy = document.querySelectorAll('.estudy')
const cloestudios = document.getElementById('cloestudios')

desestudios.addEventListener('click', ()=>{
    for (let i=0;i<estudy.length;i++){
        estudy[i].style.display = "none"
    }
    desestudios.style.display ='none'
    cloestudios.style.display ='inline'
})

cloestudios.addEventListener('click', ()=>{
    for (let i=0;i<estudy.length;i++){
        estudy[i].style.display = "flex"
    }
    desestudios.style.display ='inline'
    cloestudios.style.display ='none'
})

const descomplemento = document.getElementById('descomplemento')
const complemento = document.querySelectorAll('.complemento')
const clocomplemento = document.getElementById('clocomplemento')

descomplemento.addEventListener('click', ()=>{
    for (let i=0;i<complemento.length;i++){
        complemento[i].style.display = "none"
    }
    descomplemento.style.display ='none'
    clocomplemento.style.display ='inline'
})

clocomplemento.addEventListener('click', ()=>{
    for (let i=0;i<complemento.length;i++){
        complemento[i].style.display = "flex"
    }
    descomplemento.style.display ='inline'
    clocomplemento.style.display ='none'
})