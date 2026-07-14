import { BarChart3, CheckCircle2, Clock3 } from 'lucide-react'
import { AdminShell } from '../components/layout/AdminShell'

const statCards = [
  { label: 'Aktive medlemmer', value: '428', detail: '+18 denne måned' },
  { label: 'Nye bookinger', value: '64', detail: '12 afventer svar' },
  { label: 'Varer i omløb', value: '1.284', detail: '92 nye indleveringer' },
]

const recentActivity = [
  'Nyt medlem oprettet: Maria L.',
  'Booking bekræftet til Istedgade',
  'Gavekort registreret i systemet',
  'Medlemskab sat på pause',
]

const adminStatus = [
  ['Produkter', 'Aktiv'],
  ['Blog', 'Kladde klar'],
  ['Gavekort', 'Synlig'],
  ['Sidst gemt', 'I dag'],
]

export function AdminDashboard() {
  return (
    <AdminShell
      title="Dashboard"
      description="Få et hurtigt overblik over medlemmer, bookinger og aktivitet i garderoben."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(15rem,18rem)]">
        <section className="admin-panel">
          <div className="admin-panel-header flex items-center justify-between gap-4">
            <div>
              <p className="admin-section-kicker">Overblik</p>
              <h2 className="admin-section-title">Dagens drift</h2>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] text-[var(--admin-accent)]">
              <BarChart3 className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </span>
          </div>

          <div className="admin-panel-body">
            <div className="grid gap-3 md:grid-cols-3">
              {statCards.map((card) => (
                <article
                  key={card.label}
                  className="rounded-[var(--admin-radius)] border border-[var(--admin-divider)] bg-[var(--admin-bg)] p-4"
                >
                  <p className="admin-section-kicker">{card.label}</p>
                  <p className="mt-3 text-[2rem] font-semibold leading-none tracking-normal text-[var(--admin-text)]">
                    {card.value}
                  </p>
                  <p className="admin-muted mt-2 text-sm leading-6">{card.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid h-52 grid-cols-7 items-end gap-3 border-b border-[var(--admin-divider)] pb-4">
              {[44, 68, 52, 78, 64, 88, 72].map((height, index) => (
                <div
                  key={String(index)}
                  className="rounded-t-md bg-[var(--admin-accent)]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[var(--admin-text-secondary)]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--admin-accent)]" />
                Aktivitet denne uge
              </span>
              <span>Opdateret i dag</span>
            </div>
          </div>
        </section>

        <aside className="grid gap-5 self-start">
          <section className="admin-panel">
            <div className="admin-panel-body">
              <p className="admin-section-kicker">Status</p>
              <dl className="mt-3 grid gap-2 text-sm">
                {adminStatus.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3">
                    <dt className="text-[var(--admin-muted)]">{label}</dt>
                    <dd className="font-medium text-[var(--admin-text)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="admin-panel">
            <div className="admin-panel-header">
              <p className="admin-section-kicker">Seneste aktivitet</p>
              <h2 className="admin-section-title">Hændelser</h2>
            </div>
            <div className="admin-panel-body">
              {recentActivity.length > 0 ? (
                <ul className="grid gap-2">
                  {recentActivity.map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-lg border border-[var(--admin-divider)] bg-white px-3 py-2.5 text-sm leading-6 text-[var(--admin-text-secondary)]"
                    >
                      {index < 2 ? (
                        <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--admin-success)]" strokeWidth={1.9} aria-hidden="true" />
                      ) : (
                        <Clock3 className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--admin-warning)]" strokeWidth={1.9} aria-hidden="true" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="admin-feedback">
                  Der er ingen aktivitet at vise endnu.
                </p>
              )}
            </div>
          </section>
        </aside>
      </div>
    </AdminShell>
  )
}
