// Adaptive partner logos on boot up
let partner = document.getElementsByClassName('partner');
let partnersSum = 0;
for ( let i = 0; i < partner.length; i++) {
  partner[i].parentElement.style.width = partner[i].offsetWidth + 'px';
  partnersSum += partner[i].offsetWidth;
}
let partnersWidth = partner[0].parentElement.parentElement.offsetWidth;
if ( partnersSum > partnersWidth ) {
  for ( let i = 0; i < partner.length; i++) {
    partner[i].parentElement.style.paddingTop = (5 - ( partnersSum / 1000 ) ) + '%';
  }
}

const footerApp = new Vue({
  el: '#footer-root',
  data: {
    socialLinks: [
      {
        icon: 'fa-facebook',
        link: '#',
      },
      {
        icon: 'fa-twitter',
        link: '#',
      },
      {
        icon: 'fa-instagram',
        link: '#',
      },
    ]

  }
})
