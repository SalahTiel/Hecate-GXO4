setTimeout(() => {
  let openingScreen = document.querySelector('openingScreen')
  openingScreen.style.display = 'none'
}, 4000)

function openAndClose(command) {
  let menu = document.getElementById('menu')
  if (command == 'close') {
    //menu.style.visibility = 'hidden'
    menu.style.display = 'none'
  } else {
    //menu.style.visibility = 'visible'
    menu.style.display = 'block'
  }
}
