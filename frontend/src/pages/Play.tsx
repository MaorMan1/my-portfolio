function Play() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <canvas id="gameCanvas" width={480} height={320} className="border-4 border-indigo-500" />
    </div>
  )
}

export default Play