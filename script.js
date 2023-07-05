
//event listener for form submit
var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault(); //prevents form from autosubmitting

    var firstname = document.getElementById('fname').value
    var lastname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value

    console.log(firstname)
    console.log(lastname)
    console.log(email)
    console.log(message)

    

    

        // combine form into structured HTML format
let ebody = `
<b>Name: </b>${firstname} ${lastname}
<br>
<b>Email: </b>${email}
<br>
<b>Message: </b>${message}
<br>
`

    //code to send form to email address..

Email.send({
SecureToken : "c3cf117c-6e44-4be3-8265-2906fa0618ad",
   To : 'rick7388@googlemail.com',
From : "rick7388@googlemail.com",
Subject : "New Message from " + firstname,
Body : ebody
}).then(function(message) {
  alert(message);
});
});

