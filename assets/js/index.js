import './egg.js'

Raven.context(function () {
  const $ = document

  function randomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  function shapeGenerator(divs) {
    divs.forEach(el => {
      let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
      let size = randomInt(40, 160)
      let positionX = randomInt(0, 100)
      let positionY = randomInt(0, 100)

      el.style.backgroundColor = color

      size = `${size}px`

      el.style.width = size
      el.style.height = size

      positionX = `${positionX}%`
      positionY = `${positionY}%`

      el.style.top = positionY
      el.style.right = positionX
    })
  }

  const shapes = $.querySelectorAll('.shapes div')

  try {
    shapeGenerator(shapes)
  } catch (err) {
    Raven.captureException(err)
  }

  $.getElementById('year').textContent = new Date().getFullYear()
});
