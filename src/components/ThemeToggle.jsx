import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full border dark:border-gray-400 border-gray-700 bg-white dark:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle