window.addEventListener('load', enterSite)

function enterSite() {
  console.log('Er du der?')
  document.querySelector('.main').classList.add('fadein')
}
