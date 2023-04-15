const navBar = document.querySelector('.page-nav');
const talkFreeButton = document.querySelector('.talk-for-free');
const tryFreeButton = document.querySelector('.try-for-free');
const signupEmail = document.querySelector('.signup-w-mail');
const signupGoogle = document.querySelector('.signup-w-google');
let firstScroll = true;

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 100 && firstScroll) {
    navBar.setAttribute('class', 'page-nav float-nav');
    firstScroll = false;
    console.log('scrolled past');
  } else if (window.pageYOffset < 100 && !firstScroll) {
    navBar.setAttribute('class', 'page-nav');
    firstScroll = true;
    console.log('scrolled pre');
  }
});

talkFreeButton.addEventListener('click', ()=>{
  window.open('https://slack.com/intl/en-in/contact-sales', '_blank');
});

tryFreeButton.addEventListener('click', ()=>{
  window.open('https://slack.com/intl/en-in/get-started#/createnew', '_blank');
});

signupEmail.addEventListener('click', ()=>{
  window.open('https://slack.com/intl/en-in/get-started#/createnew', '_blank');
});

signupGoogle.addEventListener('click', ()=>{
  window.open('https://slack.com/intl/en-in/get-started#/createnew', '_blank');
});
