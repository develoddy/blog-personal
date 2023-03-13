

const buttonEmail = document.getElementById('buttonEmail');
const loader = document.getElementById('buttonloader');

if ( loader ) {
    loader.style.display = 'none';
}

const alertWarning = document.getElementById('alert-warning');
if ( alertWarning ) {
    alertWarning.style.display = 'none';
}

if ( buttonEmail ) {
    buttonEmail.addEventListener('click', function(e) {
        e.preventDefault();
    
        //buttonText.style.display = 'none';
        loader.style.display = 'inline-block';
        
        // Get data form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if ( name.length == 0 || email.length == 0 || subject.length == 0 ) {

            setTimeout(function () {
                loader.style.display = 'none';
                document.getElementById('name').style.borderColor = "red";
                document.getElementById('email').style.borderColor = "red";
                document.getElementById('subject').style.borderColor = "red";
                alertWarning.style.display = 'block';
            }, 1000);
            
        } else {
            setTimeout(function () {
                window.location.href =  `mailto:lujandev@lujandev.com?subject=${subject}&body=Name%3A${name}%0AEmail%3A${email}%0AMessage%3A${message}%0A`;
                loader.style.display = 'none';
            }, 2000);
        }
    });
}