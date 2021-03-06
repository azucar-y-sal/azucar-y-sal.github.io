var contactForm = contactSection.querySelector('form'),
    inputName = contactForm.querySelector('[name="nombre"]'),
    inputEmail = contactForm.querySelector('[name="contacto"]'),
    textAreaMessage = contactForm.querySelector('[name="mensaje"]'),
    sendButton = contactForm.querySelector('[name="submit"]');

    sendButton.addEventListener('click', function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton.innerHTML = 'sending..';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//formspree.io/cynwhite87@gmail.com', true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

      xhr.send(
        "name=" + inputName.value +
        "&email=" + inputEmail.value +
        "&message=" + textAreaMessage.value);

      xhr.onloadend = function (res) {
        if (res.target.status === 200){
          sendButton.innerHTML = 'Message sent!';
        }
        else {
          sendButton.innerHTML = 'Error!';
        }
      }
    });
