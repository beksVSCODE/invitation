const card = document.querySelector('.card')
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/meojokbj', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('response-message').style.display = 'block';
        } else if (xhr.readyState === 4) {
            alert('Не удалось отправить сообщение. Попробуйте еще раз.');
        }
    };
    xhr.send(formData);
    card.classList.add('show-overlay')
});
