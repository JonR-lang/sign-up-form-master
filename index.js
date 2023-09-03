const form = document.getElementById('freetrial-form');
const input = Array.from(document.querySelectorAll('input'));
const email = document.getElementById('e-mail')
console.log(email.value)

console.log(input[0].nextElementSibling)
form.addEventListener('submit', (e) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(email.value)) {
        email.nextElementSibling.style.display = 'block'
        email.nextElementSibling.nextElementSibling.style.display = 'block'
        email.nextElementSibling.textContent = 'Looks like this is not an email'
        e.preventDefault()
    }
    input.forEach(item => {
        if (item.value === '') {
            item.nextElementSibling.style.display = 'block'
            item.nextElementSibling.nextElementSibling.style.display = 'block'
            item.nextElementSibling.textContent = item.placeholder + " cannot be empty"
            e.preventDefault()
        }
    })
   
} )
















































 