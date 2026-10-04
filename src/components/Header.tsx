import { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { useActiveSection } from '../hooks/useActiveSection'

interface NavItem {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'me', label: 'Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [isDark, toggleDark] = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const linkClass = (id: string) =>
    `text-sm font-medium hover:text-[#FF5F40] transition-colors focus:outline-none ${
      active === id ? 'text-[#FF5F40] font-semibold' : ''
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Prem<span className="text-[#FF5F40]">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={linkClass(item.id)}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}

          <button
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined block">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>

        <button
          className="md:hidden text-slate-900 dark:text-white"
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <nav
        id="mobile-menu"
        className={`md:hidden fixed top-20 left-0 right-0 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 shadow-lg ${
          menuOpen ? '' : 'hidden'
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block py-2 text-sm font-medium hover:text-[#FF5F40] transition-colors focus:outline-none"
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}

          <button
            className="w-full py-2 px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2 text-sm font-medium"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-base">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
