export type Product = {
  slug: string;
  name: string;
  category: 'Desk' | 'Carry' | 'Explore';
  price: string;
  material: string;
  description: string;
  image: string;
  status?: 'Available' | 'Preview';
};

export const products: Product[] = [
  { slug:'machined-pen', name:'The Meridian Pen', category:'Desk', price:'$74', material:'Machined brass / blackened alloy', description:'A balanced writing instrument with enough weight to feel intentional without becoming ornamental.', image:'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1400&q=88' },
  { slug:'brass-letter-opener', name:'Brass Letter Opener', category:'Desk', price:'$58', material:'Solid brass', description:'A restrained desk blade for correspondence, proportioned more like an instrument than a novelty.', image:'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=88' },
  { slug:'agate-bookends', name:'Agate Bookends', category:'Desk', price:'$96', material:'Natural stone / polished face', description:'Two pieces cut from natural stone, chosen for variation rather than forced uniformity.', image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=88' },
  { slug:'marble-hourglass', name:'Marble Hourglass', category:'Desk', price:'$82', material:'Stone / glass', description:'A quiet timepiece for shelves and desks with enough mass to anchor the space around it.', image:'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1400&q=88' },
  { slug:'newtons-cradle', name:"Newton's Cradle", category:'Desk', price:'$68', material:'Polished steel / dark base', description:'A familiar kinetic object edited down to a cleaner, more architectural form.', image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=88' },
  { slug:'magnifying-glass', name:'Brass Magnifying Glass', category:'Desk', price:'$88', material:'Brass / optical glass', description:'Large-format desk magnifier with vintage proportions and a deliberately substantial handle.', image:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=88' },
  { slug:'edc-flashlight', name:'Field Light', category:'Carry', price:'$64', material:'Anodized aluminum', description:'A compact everyday flashlight with a clean body, practical output, and no tactical theater.', image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=88' },
  { slug:'edc-knife', name:'Utility Folder', category:'Carry', price:'$92', material:'Steel / alloy', description:'A restrained folding utility knife concept intended for compliant everyday carry where lawful.', image:'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1400&q=88', status:'Preview' },
  { slug:'kinetic-object', name:'Brass Kinetic Object', category:'Carry', price:'$54', material:'Brass', description:'A small mechanical desk-and-pocket object built around movement, weight, and repeat handling.', image:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=88' },
  { slug:'field-magnifier', name:'Field Magnifier', category:'Explore', price:'$72', material:'Brass / glass / leather', description:'A compact optical tool for field notes, maps, printed detail, and slow looking.', image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=88' },
  { slug:'travel-hourglass', name:'Travel Timer', category:'Explore', price:'$62', material:'Metal / glass', description:'A compact analog timer for work sessions, reading, or travel without another glowing screen.', image:'https://images.unsplash.com/photo-1518544889281-6d4c86f6051f?auto=format&fit=crop&w=1400&q=88' },
];

export const categories = [
  { name:'Desk', slug:'desk', line:'Objects for the surface where work gets done.', image:'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=90' },
  { name:'Carry', slug:'carry', line:'Small tools that justify the space they occupy.', image:'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1800&q=90' },
  { name:'Explore', slug:'explore', line:'Useful objects for travel, observation, and time away.', image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90' },
] as const;

export function productsFor(category?: Product['category']) {
  return category ? products.filter((p) => p.category === category) : products;
}
