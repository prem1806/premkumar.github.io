import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] || '')

  useEffect(() => {
    function updateActive() {
      let current = active
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds])

  return active
}
