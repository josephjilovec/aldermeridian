import Link from 'next/link';
import { categories, products } from '@/lib/catalog';
import { ProductGrid } from '@/components/ProductGrid';

export default function ShopPage(){
  return <main>
    <section className="page-intro"><p className="eyebrow">SHOP</p><h1>The full collection.</h1><p>Browse every object or enter through one of the three edits below. The catalog is intentionally compact so the categories stay useful instead of becoming endless menus.</p><div className="shop-nav">{categories.map(c=><Link key={c.slug} href={`/shop/${c.slug}`}>{c.name}</Link>)}</div></section>
    <section className="section light"><div className="category-grid">{categories.map(c=><Link className="category-card" href={`/shop/${c.slug}`} key={c.slug}><img src={c.image} alt={c.name}/><div><span>COLLECTION</span><h3>{c.name}</h3><p>{c.line}</p></div></Link>)}</div></section>
    <section className="section"><div className="section-head"><div><p className="eyebrow">ALL OBJECTS</p><h2>Everything in one place.</h2></div></div><ProductGrid items={products}/></section>
  </main>;
}
