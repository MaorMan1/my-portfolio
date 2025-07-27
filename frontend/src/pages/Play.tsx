import { useEffect, useRef, useState } from 'react'

function Play() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [restartTrigger, setRestartTrigger] = useState(0)
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    // Make canvas full width while maintaining 3:2 aspect ratio
    const resizeCanvas = () => {
      const scale = Math.min(window.innerWidth / 480, 1)
      canvas.style.transform = `scale(${scale})`
      canvas.style.transformOrigin = 'top center'
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

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

      if (x + dx > width - ballRadius || x + dx < ballRadius) dx = -dx
      if (y + dy < ballRadius) dy = -dy
      else if (y + dy > height - ballRadius) {
        if (x + ballRadius > paddleX && x - ballRadius < paddleX + paddleWidth) {
          const hitPoint = x - (paddleX + paddleWidth / 2)
          dx = hitPoint * 0.15
          dy = -dy
        } else {
          setGameStatus('lost')
          cancelAnimationFrame(animationFrameId)
          return
        }
      }

      x += dx
      y += dy

      if (rightPressed && paddleX < width - paddleWidth) {
        paddleX += 5
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 5
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = true
      else if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = true
    }

    function keyUpHandler(e: KeyboardEvent) {
      if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = false
      else if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = false
    }

    function touchHandler(e: TouchEvent) {
      const touchX = e.touches[0].clientX
      rightPressed = touchX > window.innerWidth / 2
      leftPressed = touchX < window.innerWidth / 2
    }

    function stopTouch() {
      rightPressed = false
      leftPressed = false
    }

    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    canvas.addEventListener('touchstart', touchHandler)
    canvas.addEventListener('touchmove', touchHandler)
    canvas.addEventListener('touchend', stopTouch)
    canvas.addEventListener('touchcancel', stopTouch)

    draw()

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
      canvas.removeEventListener('touchstart', touchHandler)
      canvas.removeEventListener('touchmove', touchHandler)
      canvas.removeEventListener('touchend', stopTouch)
      canvas.removeEventListener('touchcancel', stopTouch)
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [restartTrigger])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-indigo-400">🧱 Brick Breaker</h1>
      <p className="text-sm text-gray-400 mb-3 text-center">
        Tap left or right to move. Break all the bricks!
      </p>

      <div className="mb-4 text-lg font-semibold text-green-400">Score: {score}</div>

      <div className="relative w-[480px] h-[320px] max-w-full">
        <canvas
          ref={canvasRef}
          width={480}
          height={320}
          className="absolute left-0 top-0 border-4 border-indigo-500"
        />
      </div>

      {gameStatus === 'won' && <p className="text-green-400 font-bold mt-4">🎉 You Win!</p>}
      {gameStatus === 'lost' && <p className="text-red-400 font-bold mt-4">💥 Game Over</p>}

      <button
        onClick={() => setRestartTrigger((prev) => prev + 1)}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        Restart Game
      </button>
    </div>
  )
}

export default Play
