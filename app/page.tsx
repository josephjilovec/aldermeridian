import Link from 'next/link';
import { categories, products } from '@/lib/catalog';
import { ProductGrid } from '@/components/ProductGrid';

export default function HomePage(){
  return <main>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">ALDER & MERIDIAN</p><h1>Objects with class.</h1><p>A considered collection of useful objects for the desk, the pocket, and the places in between. Chosen for material, proportion, function, and the simple test of whether they deserve to stay.</p><Link className="button" href="/shop">Enter the shop →</Link></div></section>

    <section className="section light"><div className="section-head"><div><p className="eyebrow">SHOP BY WORLD</p><h2>Three ways in.</h2></div><p>Desk, Carry, and Explore are no longer navigation clutter. They are distinct edits inside the shop—each with its own page, product logic, and visual point of view.</p></div><div className="category-grid">{categories.map(c=><Link className="category-card" href={`/shop/${c.slug}`} key={c.slug}><img src={c.image} alt={c.name}/><div><span>SHOP / {c.name.toUpperCase()}</span><h3>{c.name}</h3><p>{c.line}</p></div></Link>)}</div></section>

    <section className="section"><div className="section-head"><div><p className="eyebrow">THE EDIT</p><h2>Objects that earn their place.</h2></div><Link className="button" href="/shop">Shop all objects →</Link></div><ProductGrid items={products.slice(0,8)}/></section>

    <section className="editorial-split"><div className="editorial-image"/><div className="editorial-copy"><p className="eyebrow">OUR STANDARD</p><h2>Useful first. Distinct second.</h2><p>Alder & Meridian is built around restraint. The collection does not need to be huge. It needs to be coherent. Materials should feel deliberate. Objects should work. Proportions should hold up over time. The goal is not novelty for its own sake—it is a smaller set of things with better reasons to exist.</p><Link className="button" href="/standard">Read our standard →</Link></div></section>
  </main>;
}
