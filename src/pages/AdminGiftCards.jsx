import { Gift } from 'lucide-react'
import { AdminShell } from '../components/layout/AdminShell'

export function AdminGiftCards() {
  return (
    <AdminShell
      title="Gavekort"
      description="Testside til administration af gavekort."
    >
      <section className="admin-panel">
        <div className="admin-panel-header flex items-center justify-between gap-4">
          <div>
            <p className="admin-section-kicker">Gavekort</p>
            <h2 className="admin-section-title">Oversigt</h2>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] text-[var(--admin-accent)]">
            <Gift className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>
        <div className="admin-panel-body">
          <p className="admin-muted text-sm leading-6">
            Her kommer gavekort, når administrationen kobles på data.
          </p>
        </div>
      </section>
    </AdminShell>
  )
}
