(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      // Obtener los valores del formulario
      const name = thisForm.querySelector('[name="name"]').value;
      const email = thisForm.querySelector('[name="email"]').value;
      const empresa = thisForm.querySelector('[name="empresa"]').value;
      const service = thisForm.querySelector('[name="service"]').value;
      const subject = thisForm.querySelector('[name="subject"]').value;
      const message = thisForm.querySelector('[name="message"]').value;

      // Construir el cuerpo del correo
      const body = `
Nombre: ${name}%0D%0A
Email: ${email}%0D%0A
Empresa: ${empresa}%0D%0A
Servicio: ${service}%0D%0A
Mensaje: ${message}
`;

      // Crear el enlace mailto
      const mailtoLink = `mailto:correo@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      // Mostrar el loader y simular envío
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Simular un breve "envío" y abrir el mail
      setTimeout(() => {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');

        // Abrir cliente de correo
        window.location.href = mailtoLink;

        // Resetear el formulario
        thisForm.reset();
      }, 1000); // 1 segundo de "carga"
    });
  });

})();
