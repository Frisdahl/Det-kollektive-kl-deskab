import { useState } from 'react'
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function AdminLogin() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email')).trim().toLowerCase()
    const password = String(formData.get('password'))

    window.setTimeout(() => {
      if (email === 'admin@test.dk' && password === 'admin123') {
        window.localStorage.setItem('adminTestLogin', 'true')
        navigate('/admin/dashboard')
        return
      }

      setIsSubmitting(false)
      setError('Brug test-login: admin@test.dk / admin123')
    }, 250)
  }

  return (
    <main className="admin-app min-h-svh">
      <section className="grid min-h-svh bg-[var(--admin-bg)] px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,30rem)] lg:px-10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col justify-between gap-10 lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(24rem,30rem)] lg:items-center lg:gap-14">
          <div className="max-w-xl">
            <div className="flex flex-col font-['filson-pro'] leading-[0.86] tracking-normal text-[var(--admin-text)]">
              <span className="text-[0.72rem]">DET</span>
              <span className="text-[1.2rem]">KOLLEKTIVE</span>
              <span className="text-[1.2rem]">KLÆDESKAB</span>
            </div>
            <p className="admin-section-kicker mt-12">Admin</p>
            <h1 className="admin-page-title mt-3 max-w-lg">
              Log ind til administration
            </h1>
            <p className="admin-page-description mt-4 max-w-md text-sm leading-6">
              Brug testadgangen til at åbne dashboardet og administrere indhold,
              produkter og blogindlæg.
            </p>
          </div>

          <section className="admin-panel w-full">
            <div className="admin-panel-header flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--admin-accent-light)] text-[var(--admin-accent)]">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h2 className="admin-section-title mt-0">Admin login</h2>
                <p className="admin-muted mt-2 text-sm leading-6">
                  Log ind med din arbejds-email og adgangskode.
                </p>
              </div>
            </div>

            <form className="admin-panel-body admin-form-stack" onSubmit={handleSubmit}>
              <p className="rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] px-3 py-2 text-xs font-semibold text-[var(--admin-muted)]">
                Test: admin@test.dk / admin123
              </p>

              <label className="admin-label">
                Email
                <span className="relative block">
                  <Mail
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--admin-muted)]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <input
                    className="admin-field pl-10"
                    name="email"
                    type="email"
                    autoComplete="username"
                    defaultValue="admin@test.dk"
                    placeholder="admin@email.dk"
                  />
                </span>
              </label>

              <label className="admin-label">
                Adgangskode
                <span className="relative block">
                  <LockKeyhole
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--admin-muted)]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <input
                    className="admin-field pl-10"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    defaultValue="admin123"
                    placeholder="Din adgangskode"
                  />
                </span>
              </label>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 text-sm leading-6 text-[var(--admin-muted)]">
                  <input
                    className="h-4 w-4 rounded border-[var(--admin-input-border)] accent-[var(--admin-accent)]"
                    name="remember"
                    type="checkbox"
                  />
                  Husk mig
                </label>

                <a
                  href="mailto:kontakt@detkollektiveklaedeskab.dk"
                  className="text-sm font-semibold text-[var(--admin-accent)] underline decoration-[var(--admin-border)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--admin-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--admin-accent)]"
                >
                  Glemt adgang?
                </a>
              </div>

              {error ? (
                <p className="admin-feedback admin-feedback-error">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="admin-button-primary mt-2 w-full"
              >
                {isSubmitting ? 'Logger ind...' : 'Log ind'}
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  )
}
