// 1 passo - selecionar o botão de ataque

let btnAttack = document.getElementById("btn-attack")
let btnStrong = document.getElementById("btn-strong")
let btnHeal = document.getElementById("btn-heal")
let btnShow = document.getElementById("btn-show")


// 2 passo - reconhecer quando o botão é clicado

btnAttack.addEventListener('click', () => {  
        console.log(danoJogador) 
})
btnStrong.addEventListener('click', () => {
        console.log(danoforte)
})
btnHeal.addEventListener('click', () => {
        console.log(heal)
})

// 3 passo - logar quantas vezes o botão foi clicado

// variaveis



let danoJogador = Math.floor(Math.random() * 15 ) 
let danoMonstro = Math.floor(Math.random() * 25 ) 
let danoforte = Math.floor(Math.random() * 23 ) 
let vidaMonster = 200
let vidaPlayer = 200
let heal = 35



// eventos das variaveis

btnAttack.addEventListener('click', () => {
        console.log(vidaMonster - danoJogador)  
})

btnStrong.addEventListener('click', () => {
        console.log(vidaMonster - danoforte)
})

btnHeal.addEventListener('click', () => {
        console.log(vidaPlayer + heal)
})

//Ataque do Player

btnAttack.addEventListener('click', () => {

        if (vida.value < 1) {
                alert("Você ganhou")
        }  
        if (playerhealth.value < 1){
                playerhealth.value = 30
                if (playerhealth.value < 1){
                        alert("Você perdeu")
                }
        }
        console.log (vidaMonster = vidaMonster - Math.floor)
        console.log(vida.value = vida.value - danoJogador)
})

btnStrong.addEventListener('click', () => {

        if (vida.value < 1) {
                alert("Você ganhou")
        }  
        if (playerhealth.value < 1){
                playerhealth.value = 30
        }
        else{
                alert("Você perdeu")
        }
        console.log (vidaMonster = vidaMonster - danoforte)
        console.log(vida.value = vida.value - danoforte)
})

btnHeal.addEventListener('click', () => {

        if (vida.value < 1) {
                alert("Você ganhou")
        }  
        if (playerhealth.value < 1){
                playerhealth.value = 30
        }
        else{
                alert("Você perdeu")
        }
        console.log(playerhealth.value = playerhealth.value + heal)
}) 


//Ataque do monstro

btnAttack.addEventListener('click', () => {
        console.log(playerhealth.value = playerhealth.value - danoMonstro)
})

btnStrong.addEventListener('click', () => {
        console.log(playerhealth.value = playerhealth.value - danoMonstro)
})

btnHeal.addEventListener('click', () => {
        console.log(playerhealth.value = playerhealth.value - danoMonstro)
}) 

//Vitoria/Derrota


const monsterhealth = document.getElementById("monster")

