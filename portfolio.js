window.addEventListener('load', enterSite)

function enterSite() {
  console.log('enterSite')
  document.querySelector('.main').classList.add('fadein')
  console.log('knapPuls')
  document.querySelector('.litemaer').classList.add('pulse')
}
