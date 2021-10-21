var emailjs;

currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;

// Send email via emailJS
function SendEmail() {
    emailjs
        .send('gmailAdmin', 'template_3WsqlJYJ', {
            from_name: document.getElementById('name').value,
            message_html: document.getElementById('message').value,
            from_email: document.getElementById('email').value,
        })
        .then(
            // Handle email send successfully
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensaje enviado');
                setTimeout(function() {
                    window.location = '/';
                }, 1000);
            },
            // Handle email send error
            function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje');
                setTimeout(function() {
                    window.location = '/about';
                }, 2000);
            },
        );
}

(function() {
    var developmentURL = 'http://localhost:4000/contact';
    var productionURL = 'https://vnt-vamady-webpage.netlify.com/contact'; // temporalmente mientras se adquiere el dominio

    // Prevent add event listener in other page different to contact
    // reemplazar developmentURL por la del dominio del cliente productionURl cuando el proyecto este listo
    if (location.href === developmentURL) {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            var form = $('#contact-form');
            // Validate if form is valid to send or not email
            if (form.valid()) {
                SendEmail();
            }
        });
    }
    return;
})();
