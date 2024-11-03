import { useEffect } from 'react'

export const useVhFix = () => {
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    updateVh()

    window.addEventListener('resize', updateVh)

    return () => window.removeEventListener('resize', updateVh)
  }, [])
}
