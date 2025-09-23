import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full opacity-30 blur-2xl animate-bubble`}
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 100}px`,
              background: [
                'rgba(99,102,241,0.5)',   // indigo-500
                'rgba(236,72,153,0.5)',   // pink-500
                'rgba(34,197,94,0.5)',    // green-500
                'rgba(59,130,246,0.5)',   // blue-500
                'rgba(251,191,36,0.5)',   // yellow-400
              ][i % 5],
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground