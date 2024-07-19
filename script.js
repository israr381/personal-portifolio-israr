/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 








function SendMail() {
    var fullName = document.getElementById("fullName").value;
    var email_id = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;

    if (fullName === "" || email_id === "" || message === "") {
        showModal("Please fill in all fields before sending the message.");
        return;
    }

    var params = {
        from_name: fullName,
        email_id: email_id,
        message: message
    };

    var sendButton = document.querySelector('.contact__button');
    var loadingSpinner = document.getElementById('loadingSpinner');

    sendButton.disabled = true;
    sendButton.value = "Sending...";
    loadingSpinner.style.display = "block";

    emailjs.send("service_oen1cbj", "template_dg1etee", params).then(function (res) {
        showModal("Success! Your message has been sent.");
        sendButton.disabled = false;
        sendButton.value = "Send";
        loadingSpinner.style.display = "none";
    }).catch(function (error) {
        showModal("Failed to send the message. Please try again later.");
        console.error("Error:", error);
        sendButton.disabled = false;
        sendButton.value = "Send";
        loadingSpinner.style.display = "none";
    });
}

function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modal-message");
    var span = document.getElementsByClassName("close")[0];

    modalMessage.innerText = message;
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }}