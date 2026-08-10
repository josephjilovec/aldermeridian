import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alder & Meridian | Objects with class',
  description: 'A considered collection of desk objects, carry goods, and useful pieces selected for material, function, and restraint.',
};

const nav = [
  ['Shop','/shop'],
  ['Collections','/collections'],
  ['Our Standard','/standard'],
  ['About','/about'],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <div className="announcement">OBJECTS WITH CLASS / DESK · CARRY · EXPLORE</div>
    <header className="site-header">
      <Link className="brand" href="/"><span className="brand-mark">A&M</span><span><b>ALDER & MERIDIAN</b><small>Objects with class.</small></span></Link>
      <nav className="main-nav">{nav.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="cart-link" href="/shop">Shop</Link>
    </header>
    {children}
    <footer className="site-footer">
      <div className="footer-lead"><b>ALDER & MERIDIAN</b><p>Useful objects, selected with restraint. Fewer pieces. Better reasons to own them.</p></div>
      <div><b>SHOP</b><Link href="/shop">All objects</Link><Link href="/shop/desk">Desk</Link><Link href="/shop/carry">Carry</Link><Link href="/shop/explore">Explore</Link></div>
      <div><b>STUDIO</b><Link href="/collections">Collections</Link><Link href="/standard">Our Standard</Link><Link href="/about">About</Link></div>
      <div className="footer-bottom">© 2026 Alder & Meridian <span>•</span><a href="https://www.josephjilovec.com/ventures">A Joseph Jilovec Venture</a><span>•</span><a className="venture-link" href="https://www.josephjilovec.com/ventures">Explore the Venture Studio →</a></div>
    </footer>
  </body></html>;
}
