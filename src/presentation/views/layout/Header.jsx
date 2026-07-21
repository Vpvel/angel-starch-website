import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLayoutViewModel } from '../../viewmodels/useLayoutViewModel'
import { categoriesRepository } from '../../../data/repositories/categoriesRepository'
import './Header.css'

function ChevronIcon() {
  return (
    <svg className="header__chevron" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.3 5.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4L10.6 10 7.3 6.7a1 1 0 0 1 0-1.4z"
      />
    </svg>
  )
}

const isMobileNav = () => window.matchMedia('(max-width: 900px)').matches

export default function Header() {
  const { company, navLinks } = useLayoutViewModel()
  const [open, setOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const [activeCat, setActiveCat] = useState(null)
  const closeTimer = useRef(null)
  const categoryItems = categoriesRepository.getMenuItems()

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openCategories = () => {
    clearCloseTimer()
    setCatOpen(true)
  }

  const scheduleCloseCategories = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => {
      setCatOpen(false)
      setActiveCat(null)
    }, 160)
  }

  const closeMenus = () => {
    clearCloseTimer()
    setOpen(false)
    setCatOpen(false)
    setActiveCat(null)
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <Link to="/" className="header__logo" onClick={closeMenus}>
          <img src={company.logo} alt={company.name} />
        </Link>

        <div className="header__bar">
          <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
            {navLinks.map((link) =>
              link.path === '/categories' ? (
                <div
                  key={link.path}
                  className={`header__dropdown ${catOpen ? 'is-open' : ''}`}
                  onMouseEnter={openCategories}
                  onMouseLeave={scheduleCloseCategories}
                >
                  <button
                    type="button"
                    className={`header__dropdown-trigger ${catOpen ? 'is-active' : ''}`}
                    aria-expanded={catOpen}
                    aria-haspopup="true"
                    onClick={() => {
                      if (isMobileNav()) {
                        setCatOpen((v) => !v)
                        setActiveCat(null)
                        return
                      }
                      // Desktop: keep open (hover already opened it; don't toggle closed)
                      openCategories()
                    }}
                  >
                    {link.label}
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z"
                      />
                    </svg>
                  </button>

                  <div className="header__menu" role="menu">
                    {categoryItems.map((item) => {
                      const hasChildren = item.children.length > 0
                      const isActive = activeCat === item.slug

                      return (
                        <div
                          key={item.slug}
                          className={`header__menu-item ${hasChildren ? 'has-children' : ''} ${
                            isActive ? 'is-active' : ''
                          }`}
                          onMouseEnter={() => setActiveCat(hasChildren ? item.slug : null)}
                        >
                          <Link
                            to={item.path}
                            className="header__menu-link"
                            role="menuitem"
                            aria-expanded={hasChildren ? isActive : undefined}
                            onClick={(e) => {
                              if (hasChildren && isMobileNav()) {
                                if (activeCat !== item.slug) {
                                  e.preventDefault()
                                  setActiveCat(item.slug)
                                  return
                                }
                              }
                              closeMenus()
                            }}
                          >
                            <span>{item.label}</span>
                            {hasChildren ? <ChevronIcon /> : null}
                          </Link>

                          {hasChildren ? (
                            <div className="header__submenu" role="menu">
                              {item.children.map((child) => (
                                <Link
                                  key={child.slug}
                                  to={child.path}
                                  className="header__submenu-link"
                                  role="menuitem"
                                  onClick={closeMenus}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={closeMenus}
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <a href={company.phoneHref} className="header__phone">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
              />
            </svg>
            {company.phone}
          </a>

          <button
            type="button"
            className={`header__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
