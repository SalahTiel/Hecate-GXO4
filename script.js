//remove opening screen
setTimeout(() => {
  let openingScreen = document.getElementById('openingScreen')
  openingScreen.style.display = 'none'
}, 4000)

//mobile menu
function openAndClose(command) {
  let menu = document.getElementById('menu')
  if (command == 'close') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}

//carousel
let indexCounter = 0
setInterval(() => {
  carousel(indexCounter)
  indexCounter++
  if (indexCounter >= 3) {
    indexCounter = 0
  }
}, 5000)

function carousel(index) {
  let input
  switch (index) {
    case 0:
      document
        .getElementsByClassName('carousel-images')
        .item(0).style.backgroundImage = 'url(assets/slider-1.jpg)'
      input = document.querySelectorAll('.carousel input').item(0)
      input.checked = true
      indexCounter = 0
      break
    case 1:
      document
        .getElementsByClassName('carousel-images')
        .item(0).style.backgroundImage = 'url(assets/slider-2.jpg)'
      input = document.querySelectorAll('.carousel input').item(1)
      input.checked = true
      indexCounter = 1
      break
    case 2:
      document
        .getElementsByClassName('carousel-images')
        .item(0).style.backgroundImage = 'url(assets/slider-3.jpg)'
      input = document.querySelectorAll('.carousel input').item(2)
      input.checked = true
      indexCounter = 2
      break
  }
}
