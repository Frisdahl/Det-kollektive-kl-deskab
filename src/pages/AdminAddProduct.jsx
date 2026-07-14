import { useState } from 'react'
import {
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  Save,
  Underline,
  UploadCloud,
} from 'lucide-react'
import { AdminShell } from '../components/layout/AdminShell'

const productStatus = [
  ['Status', 'Kladde'],
  ['Sidst gemt', 'Aldrig'],
  ['Synlig', 'Ja'],
  ['Forfatter', 'Administrator'],
  ['Oprettet', '-'],
]

export function AdminAddProduct() {
  const [feedback, setFeedback] = useState({ message: '', tone: '' })
  const [isSaving, setIsSaving] = useState(false)
  const [imagePreview, setImagePreview] = useState('')
  const [description, setDescription] = useState('')

  const applyDescriptionFormat = (command, value = null) => {
    document.execCommand(command, false, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSaving(true)
    setFeedback({ message: '', tone: '' })

    window.setTimeout(() => {
      setIsSaving(false)
      setFeedback({
        message: 'Produktet er gemt som test i adminpanelet.',
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
      eyebrow="Produkter"
      title="Tilføj produkt"
      description="Opret produkter til garderoben og administrér point, størrelser og billeder."
    >
      <form className="admin-form-grid" onSubmit={handleSubmit}>
        <section className="admin-panel">
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
              <div className="grid gap-3" aria-label="Gemmer produkt">
                <div className="admin-skeleton h-10" />
                <div className="admin-skeleton h-20" />
              </div>
            ) : null}

            <label className="admin-label">
              Produktnavn
              <input
                className="admin-field"
                name="name"
                type="text"
                placeholder="F.eks. Grøn strikcardigan"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="admin-label">
                Kategori
                <select className="admin-field admin-select-placeholder" name="category" defaultValue="">
                  <option value="" disabled>Vælg kategori</option>
                  <option>Kjoler</option>
                  <option>Jakker</option>
                  <option>Strik</option>
                  <option>Skjorter</option>
                  <option>Accessories</option>
                </select>
              </label>

              <label className="admin-label">
                Størrelse
                <select className="admin-field admin-select-placeholder" name="size" defaultValue="">
                  <option value="" disabled>Vælg størrelse</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>One size</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="admin-label">
                Stand
                <select className="admin-field admin-select-placeholder" name="condition" defaultValue="">
                  <option value="" disabled>Vælg stand</option>
                  <option>Som ny</option>
                  <option>Meget god</option>
                  <option>God</option>
                  <option>Med brugsspor</option>
                </select>
              </label>

              <label className="admin-label">
                Point
                <input
                  className="admin-field"
                  name="points"
                  type="number"
                  min="0"
                  placeholder="F.eks. 150"
                />
              </label>
            </div>

            <div className="admin-label">
              Beskrivelse
              <div className="admin-richtext">
                <div className="admin-richtext-toolbar" aria-label="Formatering">
                  {[
                    { label: 'Fed', icon: Bold, command: 'bold' },
                    { label: 'Kursiv', icon: Italic, command: 'italic' },
                    { label: 'Understreget', icon: Underline, command: 'underline' },
                    { label: 'Punktliste', icon: List, command: 'insertUnorderedList' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className="admin-richtext-button"
                      aria-label={item.label}
                      onMouseDown={(event) => {
                        event.preventDefault()
                        applyDescriptionFormat(item.command)
                      }}
                    >
                      <item.icon className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />
                    </button>
                  ))}

                  <span className="admin-richtext-divider" />

                  <button
                    type="button"
                    className="admin-richtext-button"
                    aria-label="Tilføj link"
                    onMouseDown={(event) => {
                      event.preventDefault()
                      const url = window.prompt('Indsæt link')
                      if (url) {
                        applyDescriptionFormat('createLink', url)
                      }
                    }}
                  >
                    <LinkIcon className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />
                  </button>
                </div>

                <div
                  className="admin-richtext-editor"
                  contentEditable
                  data-placeholder="Skriv kort om materiale, pasform og særlige detaljer."
                  onInput={(event) => setDescription(event.currentTarget.innerHTML)}
                />
                <input type="hidden" name="description" value={description} />
              </div>
            </div>
          </div>
        </section>

        <aside className="grid gap-5 self-start">
          <section className="admin-panel">
            <div className="admin-panel-body">
              <p className="admin-section-kicker">Upload billede</p>
              <label className="admin-dropzone mt-3 cursor-pointer">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Valgt produkt"
                    className="h-24 w-full rounded-lg object-cover"
                  />
                ) : (
                  <>
                    <UploadCloud className="h-4 w-4 text-[var(--admin-accent)]" strokeWidth={1.8} aria-hidden="true" />
                    <span className="mt-2 text-xs font-semibold text-[var(--admin-text)]">
                      Drag and drop eller vælg fil
                    </span>
                    <span className="admin-muted mt-1 text-xs leading-5">
                      Klar til produktbillede.
                    </span>
                  </>
                )}
                <input
                  className="sr-only"
                  name="image"
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
                {productStatus.map(([label, value]) => (
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
              <label className="flex items-center gap-3 text-sm text-[var(--admin-text-secondary)]">
                <input className="h-4 w-4 accent-[var(--admin-accent)]" name="published" type="checkbox" defaultChecked />
                Vis produkt i admin-oversigten
              </label>
              <button
                type="submit"
                disabled={isSaving}
                className="admin-button-primary w-full"
              >
                <Save className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                {isSaving ? 'Gemmer...' : 'Gem produkt'}
              </button>
            </div>
          </section>
        </aside>
      </form>
    </AdminShell>
  )
}
