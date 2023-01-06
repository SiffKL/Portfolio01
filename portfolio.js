window.addEventListener('load', enterSite)
window.addEventListener('load', knapPuls)

function enterSite() {
  console.log('enterSite')
  document.querySelector('.main').classList.add('fadein')
}

function knapPuls() {
  console.log('knapPuls')
  document.querySelector('.litemaer').classList.add('pulse')
}
