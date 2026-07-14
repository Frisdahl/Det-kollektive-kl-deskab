import { useState } from 'react'
import { Save, UploadCloud } from 'lucide-react'
import { AdminShell } from '../components/layout/AdminShell'

const blogStatus = [
  ['Status', 'Kladde'],
  ['Sidst gemt', 'Aldrig'],
  ['Synlig', 'Ja'],
  ['Forfatter', 'Administrator'],
  ['Oprettet', '-'],
]

export function AdminAddBlog() {
  const [feedback, setFeedback] = useState({ message: '', tone: '' })
  const [isSaving, setIsSaving] = useState(false)
  const [imagePreview, setImagePreview] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSaving(true)
    setFeedback({ message: '', tone: '' })

    window.setTimeout(() => {
      setIsSaving(false)
      setFeedback({
        message: 'Blogindlægget er gemt som test i adminpanelet.',
        tone: 'success',
      })
    }, 450)
  }

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    setImagePreview(file ? URL.createObjectURL(file) : '')
  }

  return (
    <AdminShell
      eyebrow="Blog"
      title="Tilføj blogindlæg"
      description="Opret og administrér indhold til hjemmesidens blog."
    >
      <form className="admin-form-grid" onSubmit={handleSubmit}>
        <section className="admin-panel">
          <div className="admin-panel-header">
            <p className="admin-section-kicker">Blogindhold</p>
            <h2 className="admin-section-title">Indhold</h2>
          </div>

          <div className="admin-panel-body admin-form-stack">
            {feedback.message ? (
              <p
                className={[
                  'admin-feedback',
                  feedback.tone === 'success'
                    ? 'admin-feedback-success'
                    : 'admin-feedback-error',
                ].join(' ')}
              >
                {feedback.message}
              </p>
            ) : null}

            {isSaving ? (
              <div className="grid gap-3" aria-label="Gemmer blogindlæg">
                <div className="admin-skeleton h-10" />
                <div className="admin-skeleton h-20" />
              </div>
            ) : null}

            <label className="admin-label">
              Titel
              <input
                className="admin-field"
                name="title"
                type="text"
                placeholder="F.eks. Sådan giver du tøjet længere liv"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="admin-label">
                Slug
                <input
                  className="admin-field"
                  name="slug"
                  type="text"
                  placeholder="saadan-giver-du-toejet-laengere-liv"
                />
              </label>

              <label className="admin-label">
                Kategori
                <select className="admin-field admin-select-placeholder" name="category" defaultValue="">
                  <option value="" disabled>Vælg kategori</option>
                  <option>Guides</option>
                  <option>Medlemskab</option>
                  <option>Bæredygtighed</option>
                  <option>Nyheder</option>
                </select>
              </label>
            </div>

            <label className="admin-label">
              Kort intro
              <textarea
                className="admin-field admin-textarea-sm"
                name="excerpt"
                placeholder="Skriv en kort teaser, der kan vises på blogoversigten."
              />
            </label>

            <label className="admin-label">
              Indhold
              <textarea
                className="admin-field admin-textarea-lg"
                name="content"
                placeholder="Skriv blogindlægget her."
              />
            </label>
          </div>
        </section>

        <aside className="grid gap-5 self-start">
          <section className="admin-panel">
            <div className="admin-panel-body">
              <p className="admin-section-kicker">Fremhævet billede</p>
              <label className="admin-dropzone mt-3 cursor-pointer">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Valgt blogbillede"
                    className="h-24 w-full rounded-lg object-cover"
                  />
                ) : (
                  <>
                    <UploadCloud className="h-4 w-4 text-[var(--admin-accent)]" strokeWidth={1.8} aria-hidden="true" />
                    <span className="mt-2 text-xs font-semibold text-[var(--admin-text)]">
                      Drag and drop eller vælg fil
                    </span>
                    <span className="admin-muted mt-1 text-xs leading-5">
                      Klar til fremhævet billede.
                    </span>
                  </>
                )}
                <input
                  className="sr-only"
                  name="featuredImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </section>

          <section className="admin-panel">
            <div className="admin-panel-body">
              <p className="admin-section-kicker">Status</p>
              <dl className="mt-3 grid gap-2 text-sm">
                {blogStatus.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3">
                    <dt className="text-[var(--admin-muted)]">{label}</dt>
                    <dd className="font-medium text-[var(--admin-text)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="admin-panel">
            <div className="admin-panel-body admin-form-stack">
              <p className="admin-section-kicker">Publicering</p>
              <label className="admin-label">
                Status
                <select className="admin-field" name="status" defaultValue="draft">
                  <option value="draft">Kladde</option>
                  <option value="published">Udgivet</option>
                </select>
              </label>
              <label className="admin-label">
                Udgivelsesdato
                <input className="admin-field" name="publishDate" type="date" />
              </label>
              <button
                type="submit"
                disabled={isSaving}
                className="admin-button-primary w-full"
              >
                <Save className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                {isSaving ? 'Gemmer...' : 'Gem blogindlæg'}
              </button>
            </div>
          </section>
        </aside>
      </form>
    </AdminShell>
  )
}
