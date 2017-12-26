const $ = document

function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function randomPastelColor () {
  return `hsl(${360 * Math.random()}, ${(25 + 70 * Math.random())}%, ${(85 + 10 * Math.random())}%`;
}

function shapeGenerator (args) {
  args.forEach(el => {
    let size = randomInt(40, 160)
    let positionX = randomInt(0, 100)
    let positionY = randomInt(0, 100)

    el.style.backgroundColor = randomPastelColor()

    el.style.width = `${size}px`
    el.style.height = `${size}px`

    el.style.top = `${positionX}%`
    el.style.right = `${positionY}%`
  })
}

const shapes = $.querySelectorAll('.shapes div')

const sections = $.querySelectorAll('.grid section')

function backgroundColorGenerator (args) {
  args.forEach(el => {
    el.style.backgroundColor = randomPastelColor()
  })
}

try {
  shapeGenerator(shapes)
  backgroundColorGenerator(sections)
} catch (err) {
  console.log(err)
}

$.getElementById('year').textContent = new Date().getFullYear()
