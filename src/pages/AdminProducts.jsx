import { Link } from 'react-router-dom'
import { Package, Plus } from 'lucide-react'
import { AdminShell } from '../components/layout/AdminShell'
import { productItems } from '../data/productItems'

export function AdminProducts() {
  return (
    <AdminShell title="Produkter">
      <section className="admin-panel">
        <div className="admin-panel-header flex items-center justify-between gap-4">
          <div>
            <p className="admin-section-kicker">Produkter</p>
            <h2 className="admin-section-title">Alle produkter</h2>
          </div>
          <Link to="/admin/produkter/tilfoej" className="admin-button-primary">
            <Plus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            Tilføj produkt
          </Link>
        </div>

        <div className="admin-panel-body">
          <div className="overflow-hidden rounded-[var(--admin-field-radius)] border border-[var(--admin-divider)]">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Produkt</th>
                  <th>Kategori</th>
                  <th>Størrelse</th>
                  <th>Point</th>
                </tr>
              </thead>
              <tbody>
                {productItems.map((product) => (
                  <tr key={product.name}>
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt=""
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <span className="font-medium text-[var(--admin-text)]">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td>{product.category}</td>
                    <td>{product.size}</td>
                    <td>{product.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {productItems.length === 0 ? (
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-[var(--admin-divider)] bg-white px-3 py-3 text-[var(--admin-text-secondary)]">
              <Package className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              Ingen produkter endnu.
            </div>
          ) : null}
        </div>
      </section>
    </AdminShell>
  )
}
