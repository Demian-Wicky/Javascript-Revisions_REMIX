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

const todayNumbers = Array.from({length: 40}, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 6)
// console.log(todayNumbers)




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
        successElement.innerText = "les numéros du jour sont " + todayNumbers
    }


})

