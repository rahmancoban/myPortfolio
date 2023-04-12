const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();


/* Contact*/
// const btn = document.getElementById('button');
// const namme = document.getElementById('from_name').value;
// const mail = document.getElementById('email_id').value;
// const mesaj = document.getElementById('message').value;

// document.getElementById('form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     btn.value = 'Sending...';

//     const serviceID = 'default_service';
//     const templateID = 'template_vglu4de';

//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Send Email';
//         alert('Sent!');
//       }, (err) => {
//         btn.value = 'Send Email';
//         alert(JSON.stringify(err));
//       });
//   });


