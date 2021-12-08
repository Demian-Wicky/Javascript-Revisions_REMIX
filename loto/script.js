const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const form = document.getElementById('form')

const errorElement = document.getElementById('error')
const successElement = document.getElementById('success')

const nb1 = document.getElementById('nb1')
const nb2 = document.getElementById('nb2')
const nb3 = document.getElementById('nb3')
const nb4 = document.getElementById('nb4')
const nb5 = document.getElementById('nb5')
const nb6 = document.getElementById('nb6')
const nbArray = [parseInt(nb1.value), parseInt(nb2.value), parseInt(nb3.value), parseInt(nb4.value), parseInt(nb5.value), parseInt(nb6.value)]
console.log(nbArray)

const todayNumbers = Array.from({length: 40}, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 6)
console.log(todayNumbers)

function numbersCounter(){
    let counter = 0
    nbArray.forEach(value =>{
        if (todayNumbers.includes(value)){
            counter++
        }
    })
    return counter
}
console.log(numbersCounter())

function outputMessage(){
    if (numbersCounter() == 0){
        return "Vous n'avez aucun bon numéro, pas de gain !"
    }
    if (numbersCounter() == 1){
        return "Vous avez 1 bon numéro et gagnez 2€20 !"
    }
    if (numbersCounter() == 2){
        return "Vous avez 2 bon numéro et gagnez 10€ !"
    }
    if (numbersCounter() == 3){
        return "Vous avez 3 bon numéro et gagnez 100€ !"
    }
    if (numbersCounter() == 4){
        return "Vous avez 4 bon numéro et gagnez 1000€ !"
    }
    if (numbersCounter() == 5){
        return "Vous avez 5 bon numéro et gagnez 100.000€ !"
    }
    if (numbersCounter() == 6){
        return "Vous avez 6 bon numéro et gagnez 1.000.000€ !"
    }
}



form.addEventListener('submit', (e) => {
    let messages = []

    if (firstName.value === '' || firstName.value == null) {
        messages.push('Veuillez fournir un prénom')
    }

    if (lastName.value === '' || lastName.value == null) {
        messages.push('Veuillez fournir un nom')
    }

    if (email.value === '' || email.value == null) {
        messages.push("Veuillez fournir email")
    }

    if (email.value.length < 8 || email.value.length > 30) {
        messages.push("Votre email n'est pas valide")
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    ///////////////////////////////////////////////

    if (messages.length == 0){

        e.preventDefault()
        successElement.innerText = "Les numéros du jour sont " + todayNumbers.join(', ') + "\n" + outputMessage()
    }


})

