import type { Product } from '@/lib/catalog';

export function ProductGrid({ items }: { items: Product[] }) {
  return <div className="product-grid">{items.map((p) => <article className="product-card" key={p.slug}>
    <div className="product-image"><img src={p.image} alt={p.name} /></div>
    <div className="product-meta"><small>{p.category}{p.status === 'Preview' ? ' / Preview' : ''}</small><h3>{p.name}</h3><p>{p.material}</p><p>{p.description}</p><strong>{p.price}</strong></div>
  </article>)}</div>;
}
