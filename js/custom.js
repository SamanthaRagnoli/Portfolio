const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail () {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> 
    Message: ${mess.value}`;

}

 
function sendEmail() {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sami.ragnoli@gmail.com",
    Password : "93718F7BAAF5B61D63746CEA9E8D965C0680",
    To : 'sami.ragnoli@gmail.com',
    From : "sami.ragnoli@gmail.com",
    Subject : subject.value,
    Body : "bodyMessage"
}).then(
  message => {
        if (message == "OK") {
            Swal.fire({
                title:"Success!",
                text: "Message sent successfully!",
                icon: "success",
            })
        }
  }
);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});




