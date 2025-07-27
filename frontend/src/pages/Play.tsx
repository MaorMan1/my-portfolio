import { useEffect, useRef, useState } from 'react'

function Play() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [restartTrigger, setRestartTrigger] = useState(0)
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const width = canvas.width
    const height = canvas.height

    let x = width / 2
    let y = height - 30
    let dx = 2
    let dy = -2
    const ballRadius = 8

    const paddleHeight = 10
    const paddleWidth = 75
    let paddleX = (width - paddleWidth) / 2

    let rightPressed = false
    let leftPressed = false

    const brickRowCount = 3
    const brickColumnCount = 5
    const brickWidth = 75
    const brickHeight = 20
    const brickPadding = 10
    const brickOffsetTop = 30
    const brickOffsetLeft = 30
    let localScore = 0

    const bricks: { x: number; y: number; status: number }[][] = []
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = []
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
      }
    }

    setScore(0)
    setGameStatus('playing')

    let animationFrameId: number

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
          if (
            b.status === 1 &&
            x + ballRadius > b.x &&
            x - ballRadius < b.x + brickWidth &&
            y + ballRadius > b.y &&
            y - ballRadius < b.y + brickHeight
            ) {
            dy = -dy
            b.status = 0
            localScore++
            setScore(localScore)
            if (localScore === brickRowCount * brickColumnCount) {
              setGameStatus('won')
              cancelAnimationFrame(animationFrameId)
              return
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

        // Wall collision (left and right)
        if (x + dx > width - ballRadius || x + dx < ballRadius) {
            dx = -dx
        }

        // Ceiling collision
        if (y + dy < ballRadius) {
            dy = -dy
        }

        // Paddle / bottom collision
        else if (y + dy > height - ballRadius) {
            if (x + ballRadius > paddleX && x - ballRadius < paddleX + paddleWidth) {
            // Add variation based on where the ball hits the paddle
            const hitPoint = x - (paddleX + paddleWidth / 2)
            dx = hitPoint * 0.15 // Control angle sensitivity
            dy = -dy
            } else {
            setGameStatus('lost')
            cancelAnimationFrame(animationFrameId)
            return
            }
        }

        x += dx
        y += dy

        // Paddle movement
        if (rightPressed && paddleX < width - paddleWidth) {
            paddleX += 5
        } else if (leftPressed && paddleX > 0) {
            paddleX -= 5
        }

        animationFrameId = requestAnimationFrame(draw)
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
      cancelAnimationFrame(animationFrameId)
    }
  }, [restartTrigger])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-indigo-400">🧱 Brick Breaker</h1>
      <p className="text-sm text-gray-400 mb-3 text-center">
        Use Left and Right arrow keys to control the paddle. Break all the bricks!
      </p>

      <div className="mb-4 text-lg font-semibold text-green-400">Score: {score}</div>

      <canvas
        ref={canvasRef}
        width={480}
        height={320}
        className="border-4 border-indigo-500 mb-4"
      />

      {gameStatus === 'won' && <p className="text-green-400 font-bold mb-2">🎉 You Win!</p>}
      {gameStatus === 'lost' && <p className="text-red-400 font-bold mb-2">💥 Game Over</p>}

      <button
        onClick={() => setRestartTrigger((prev) => prev + 1)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        Restart Game
      </button>
    </div>
  )
}

export default Play
