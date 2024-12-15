import { useEffect } from 'react'

export const useClickOutside = (
  ref: React.MutableRefObject<null | HTMLDivElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      setTimeout(() => {
        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          !!event.target.getAttribute('outside-root')
        ) {
          return
        }
        handler(event)
      })
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
