import { useEffect, useRef, useState } from 'react'
import {
  BarChart3,
  Bell,
  ChevronDown,
  FileText,
  Gift,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  PackageCheck,
  PackagePlus,
  Search,
  Settings,
  UserPlus,
  UsersRound,
  X,
} from 'lucide-react'
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom'
import linkArrowIcon from '../../assets/icons/link-arrow.svg'

const primaryLinks = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Blog', to: '/admin/blog/tilfoej', icon: FileText },
  { label: 'Medlemmer', to: '/admin/medlemmer', icon: UsersRound },
  { label: 'Statistik', to: '/admin/statistik', icon: BarChart3 },
]

const settingsLink = { label: 'Indstillinger', to: '/admin/indstillinger', icon: Settings }
const productMainLink = { label: 'Produkter', to: '/admin/produkter', icon: Package }

const productLinks = [
  { label: 'Tilføj produkt', to: '/admin/produkter/tilfoej', icon: PackagePlus },
  { label: 'Gavekort', to: '/admin/gavekort', icon: Gift },
  { label: 'Varer', to: '/admin/varer', icon: PackageCheck },
]

const adminUsers = [
  { initials: 'AK', name: 'Admin Konto', role: 'Administrator' },
  { initials: 'DK', name: 'Det Kollektive', role: 'Redaktør' },
  { initials: 'BT', name: 'Butiksteam', role: 'Medarbejder' },
]

function ProductFilledIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M11.35 2.18a1.5 1.5 0 0 1 1.3 0l7 3.35a1.5 1.5 0 0 1 .85 1.36v10.22a1.5 1.5 0 0 1-.85 1.36l-7 3.35a1.5 1.5 0 0 1-1.3 0l-7-3.35a1.5 1.5 0 0 1-.85-1.36V6.89a1.5 1.5 0 0 1 .85-1.36l7-3.35Zm.65 1.95L6.55 6.74 12 9.35l5.45-2.61L12 4.13Zm.85 6.72v8.88l5.95-2.85V8l-5.95 2.85Z"
      />
    </svg>
  )
}

function SidebarContent({ onNavigate }) {
  const location = useLocation()
  const isProductActive =
    location.pathname === productMainLink.to ||
    productLinks.some((item) => location.pathname === item.to)
  const activeProductIndex = productLinks.findIndex((item) => location.pathname === item.to)
  const [isProductOpen, setIsProductOpen] = useState(isProductActive)
  const [dashboardLink, ...secondaryLinks] = primaryLinks
  const ProductIcon = isProductOpen ? productMainLink.icon : ProductFilledIcon

  return (
    <>
      <nav className="flex-1 px-3 py-4" aria-label="Admin navigation">
        <ul className="grid gap-0">
          <li>
            <NavLink
              to={dashboardLink.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                ['admin-nav-link', isActive ? 'admin-nav-link-active' : ''].join(' ')
              }
            >
              <dashboardLink.icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
              <span>{dashboardLink.label}</span>
            </NavLink>
          </li>

          <li>
            <div
              className={[
                'admin-nav-group-trigger',
                isProductActive ? 'admin-nav-group-trigger-active' : '',
              ].join(' ')}
            >
              <NavLink
                to={productMainLink.to}
                onClick={onNavigate}
                className="flex min-w-0 flex-1 items-center gap-2"
              >
                <ProductIcon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                <span className="truncate">{productMainLink.label}</span>
              </NavLink>
              <button
                type="button"
                onClick={() => setIsProductOpen((current) => !current)}
                className="flex h-5 w-5 shrink-0 items-center justify-center"
                aria-label={isProductOpen ? 'Luk produktmenu' : 'Åbn produktmenu'}
                aria-expanded={isProductOpen}
              >
                <ChevronDown
                  className={[
                    'h-3.5 w-3.5 transition-transform',
                    isProductOpen ? 'rotate-180' : '',
                  ].join(' ')}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </button>
            </div>

            {isProductOpen ? (
              <ul
                className={[
                  'admin-nav-sublist',
                  activeProductIndex >= 0 ? 'admin-nav-sublist-has-active' : '',
                ].join(' ')}
                style={{
                  '--admin-active-sub-index':
                    activeProductIndex >= 0 ? activeProductIndex : productLinks.length - 1,
                }}
              >
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      onClick={onNavigate}
                      className={({ isActive }) =>
                        [
                          'admin-nav-sublink',
                          isActive ? 'admin-nav-sublink-active' : '',
                        ].join(' ')
                      }
                    >
                      <img
                        className="admin-nav-sublink-arrow"
                        src={linkArrowIcon}
                        alt=""
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>

          {secondaryLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  ['admin-nav-link', isActive ? 'admin-nav-link-active' : ''].join(' ')
                }
              >
                <item.icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-[var(--admin-divider)] px-3 py-4">
        <NavLink
          to={settingsLink.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            ['admin-nav-link', isActive ? 'admin-nav-link-active' : ''].join(' ')
          }
        >
          <settingsLink.icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
          <span>{settingsLink.label}</span>
        </NavLink>
      </div>
    </>
  )
}

export function AdminShell({
  title,
  children,
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)
  const isLoggedIn = window.localStorage.getItem('adminTestLogin') === 'true'
  const currentUser = adminUsers[0]
  const pageLinks = [productMainLink, ...productLinks, ...primaryLinks, settingsLink]
  const activePageLink = pageLinks.find((item) => location.pathname === item.to)
  const PageIcon = activePageLink?.icon ?? LayoutDashboard

  useEffect(() => {
    if (!isUserMenuOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (!userMenuRef.current?.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isUserMenuOpen])

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />
  }

  const handleLogout = () => {
    window.localStorage.removeItem('adminTestLogin')
    navigate('/admin-login')
  }

  return (
    <main className="admin-app min-h-svh">
      <header className="admin-topbar sticky top-0 z-50 grid min-h-14 grid-cols-[minmax(11rem,1fr)_minmax(18rem,42rem)_minmax(12rem,1fr)] items-center gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="admin-icon-button text-white lg:hidden"
            aria-label="Åbn menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </button>
          <Link
            to="/admin/dashboard"
            className="flex flex-col font-['filson-pro'] leading-[0.86] tracking-normal text-white"
            aria-label="Det Kollektive Klædeskab admin"
          >
            <span className="text-[0.62rem]">DET</span>
            <span className="text-[0.98rem]">KOLLEKTIVE</span>
            <span className="text-[0.98rem]">KLÆDESKAB</span>
          </Link>
        </div>

        <label className="admin-topbar-search mx-auto hidden md:block">
          <span className="sr-only">Søg</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--admin-muted)]"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="søg efter produkt/gavekort"
            autoComplete="off"
          />
        </label>

        <div ref={userMenuRef} className="relative flex items-center justify-end gap-2">
          <button
            type="button"
            className="admin-icon-button text-white"
            aria-label="Notifikationer"
          >
            <Bell className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="admin-user-trigger"
            onClick={() => setIsUserMenuOpen((current) => !current)}
            aria-expanded={isUserMenuOpen}
          >
            <span className="admin-user-avatar">{currentUser.initials}</span>
            <span className="admin-user-name hidden font-medium text-white sm:inline">
              {currentUser.name}
            </span>
            <ChevronDown
              className={[
                'h-4 w-4 text-white/65 transition-transform',
                isUserMenuOpen ? 'rotate-180' : '',
              ].join(' ')}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

          {isUserMenuOpen ? (
            <div className="admin-user-dropdown">
              <button type="button" className="admin-user-menu-action">
                <UserPlus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                Tilføj bruger
              </button>

              <div className="my-2 border-t border-[var(--admin-divider)]" />

              <div className="grid gap-1">
                {adminUsers.map((user) => (
                  <button
                    key={user.name}
                    type="button"
                    className="admin-user-menu-user"
                  >
                    <span className="admin-user-menu-avatar">{user.initials}</span>
                    <span className="min-w-0 text-left">
                      <span className="block truncate text-sm font-medium text-[var(--admin-text)]">
                        {user.name}
                      </span>
                      <span className="block truncate text-xs text-[var(--admin-muted)]">
                        {user.role}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="my-2 border-t border-[var(--admin-divider)]" />

              <button
                type="button"
                onClick={handleLogout}
                className="admin-user-menu-action text-[var(--admin-error)]"
              >
                <LogOut className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                Log ud
              </button>
            </div>
          ) : null}
        </div>
      </header>

      <div className="admin-shell-grid">
        <aside className="admin-sidebar hidden lg:sticky lg:top-14 lg:flex lg:h-[calc(100svh-3.5rem)] lg:flex-col">
          <SidebarContent />
        </aside>

        {isMenuOpen ? (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <button
              type="button"
              aria-label="Luk menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/20"
            />
            <aside className="admin-sidebar relative z-10 flex h-full w-[min(19rem,82vw)] flex-col shadow-[0_2px_24px_rgba(15,23,42,0.10)]">
              <div className="absolute right-3 top-3">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="admin-icon-button"
                  aria-label="Luk menu"
                >
                  <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>
              <SidebarContent onNavigate={() => setIsMenuOpen(false)} />
            </aside>
          </div>
        ) : null}

        <section className="flex min-w-0 flex-col">
          <div className="admin-content">
            <div className="mb-6">
              <div className="admin-page-heading">
                <span className="admin-page-title-icon">
                  <PageIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h1 className="admin-page-title">{title}</h1>
              </div>
            </div>
            {children}
          </div>
        </section>
      </div>
    </main>
  )
}
