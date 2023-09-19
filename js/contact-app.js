const openMenu = document.querySelector('#menu-btn')
const closeMenu = document.querySelector('#menu-close')
const navList = document.querySelector('ul')
const submission = document.querySelector('.submit')

openMenu.addEventListener('click', function() {
    navList.classList.add('active')
})

closeMenu.addEventListener('click', function() {
    navList.classList.remove('active')
})

function sendEmail () {
    (function() {
        emailjs.init("-605E2x8CWEfIa9It")
    })();

    var params = {
        senderName: document.querySelector('#username').value,
        senderMail: document.querySelector('#email').value,
        senderNumber: document.querySelector('#phone').value,
        senderMessage: document.querySelector('#msg').value,
    };

    var serviceID = "service_pm5duei";
    var templateID = "template_fcsu4yi";

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert('Thank you, ' + params['senderName'] +'! Your email was sent successfully.')
    })
    .catch();
}

submission.addEventListener('click', (event) => {
    event.preventDefault();
    sendEmail()
})