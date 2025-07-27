import { useEffect } from 'react'

function Play() {
  useEffect(() => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')!
    const width = canvas.width
    const height = canvas.height

    // Ball
    let x = width / 2
    let y = height - 30
    let dx = 2
    let dy = -2
    const ballRadius = 8

    // Paddle
    const paddleHeight = 10
    const paddleWidth = 75
    let paddleX = (width - paddleWidth) / 2

    let rightPressed = false
    let leftPressed = false

    // Bricks
    const brickRowCount = 3
    const brickColumnCount = 5
    const brickWidth = 75
    const brickHeight = 20
    const brickPadding = 10
    const brickOffsetTop = 30
    const brickOffsetLeft = 30

    const bricks: { x: number; y: number; status: number }[][] = []
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = []
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
      }
    }

    function drawBall() {
      ctx.beginPath()
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.fill()
      ctx.closePath()
    }

    function drawPaddle() {
      ctx.beginPath()
      ctx.rect(paddleX, height - paddleHeight, paddleWidth, paddleHeight)
      ctx.fillStyle = '#4f46e5'
      ctx.fill()
      ctx.closePath()
    }

    function drawBricks() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
            bricks[c][r].x = brickX
            bricks[c][r].y = brickY
            ctx.beginPath()
            ctx.rect(brickX, brickY, brickWidth, brickHeight)
            ctx.fillStyle = '#10b981'
            ctx.fill()
            ctx.closePath()
          }
        }
      }
    }

    function collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const b = bricks[c][r]
          if (b.status === 1) {
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
            ) {
              dy = -dy
              b.status = 0
            }
          }
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      drawBricks()
      drawBall()
      drawPaddle()
      collisionDetection()

      // Bounce off walls
      if (x + dx > width - ballRadius || x + dx < ballRadius) {
        dx = -dx
      }
      if (y + dy < ballRadius) {
        dy = -dy
      } else if (y + dy > height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy
        } else {
          document.location.reload()
        }
      }

      x += dx
      y += dy

      // Move paddle
      if (rightPressed && paddleX < width - paddleWidth) {
        paddleX += 5
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 5
      }

      requestAnimationFrame(draw)
    }

    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true
      }
    }

    function keyUpHandler(e: KeyboardEvent) {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false
      }
    }

    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    draw()

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <canvas id="gameCanvas" width={480} height={320} className="border-4 border-indigo-500" />
    </div>
  )
}

export default Play
