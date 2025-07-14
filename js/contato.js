/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')  

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_8wcgldn', 'template_uwqwg7v', '#contact-form', 'vQTWLLcWV716ptTZA')
    .then(() => {
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Mensagem não enviada, erro no serviço ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)