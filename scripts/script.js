var menuIcon = document.getElementById('menu')

function handdleMenu() {
  document.getElementById('hb-menu').classList.toggle('hidden')
  menuIcon.classList.toggle('open')
}
menuIcon.addEventListener('click', handdleMenu)


function test() {
  let menu = document.getElementById('hb-menu').childNodes[1].childNodes
  menu.forEach((i) => {
    i.addEventListener('click', () => {
      menu.forEach((element) => {
        element.classList = []
      })
      i.classList.toggle('selected')
      handdleMenu()
      console.log('funfou')
    })
  })
}
test()
