import './egg.js'

const $ = document

randomInt (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min)

randomHexColor () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

shapeGenerator (divs) {
  divs.forEach(el => {
    let size = randomInt(40, 160)
    let positionX = randomInt(0, 100)
    let positionY = randomInt(0, 100)

    el.style.backgroundColor = randomHexColor()

    el.style.width = `${size}px`
    el.style.height = `${size}px`

    el.style.top = `${positionX}%`
    el.style.right = `${positionY}%`
  })
}

const shapes = $.querySelectorAll('.shapes div')

try {
  shapeGenerator(shapes)
} catch (err) {
  console.log(err)
}

$.getElementById('year').textContent = new Date().getFullYear()
