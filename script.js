document.getElementsById('contactForm').
addEventListener('submit'), function(event) {
    Event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message)  {
        alert('please fill in all fields.');
        returns;
        alert('Form submitted successfully!\name: '+name + '\nemail: ' +email + '\nmessage: ' +message);
        document.getElementById('contactForm')
        resize();
        

    }
}