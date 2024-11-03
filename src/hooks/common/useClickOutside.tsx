import { useState, useEffect, useRef, type RefObject } from 'react'

export default function useClickOutside<T extends HTMLElement>(
  initialIsVisible: boolean
): {
  ref: RefObject<T>
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
} {
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef<T>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [ref])

  return { ref, isShow, setIsShow }
}
