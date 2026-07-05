import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Linen Bliss Bedsheet',
    price: 2999,
    description:
      'Soft, breathable cotton for the perfect night\'s sleep. Crafted with meticulous attention to detail, this bedsheet brings the essence of Scandinavian luxury to your bedroom.',
    images: [
      'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Bedsheets',
    features: ['100% Pure Cotton', 'Luxuriously Soft', 'Easy to Maintain'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Cozy Cotton Towels',
    price: 1999,
    description:
      'Ultra-absorbent, quick-drying towels made from the finest Egyptian cotton. Experience the hotel-quality luxury every day.',
    images: [
      'https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4147876/pexels-photo-4147876.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Towels',
    features: ['Egyptian Cotton', 'Ultra Absorbent', 'Quick Dry'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Elegant Knit Cushion',
    price: 899,
    description:
      'Handcrafted knit cushion covers that add warmth and texture to any living space. Available in soft neutral tones.',
    images: [
      'https://images.pexels.com/photos/6969836/pexels-photo-6969836.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Cushions',
    features: ['Hand Knitted', 'Premium Yarn', 'Removable Cover'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Silk Serenity Bedsheet',
    price: 3499,
    description:
      'Pure silk bedsheets that regulate temperature for an optimal sleep environment. The ultimate in luxury bedding.',
    images: [
      'https://images.pexels.com/photos/6186826/pexels-photo-6186826.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6186827/pexels-photo-6186827.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Bedsheets',
    features: ['100% Natural Silk', 'Temperature Regulating', 'Anti-Wrinkle'],
    inStock: true,
    badge: 'Best Seller',
  },
  {
    id: '5',
    name: 'Plush Bathrobe',
    price: 2189,
    description:
      'Wrap yourself in cloud-like softness with our premium terry cloth bathrobe. Designed for the ultimate post-shower luxury.',
    images: [
      'https://images.pexels.com/photos/5824518/pexels-photo-5824518.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Bathrobes',
    features: ['Terry Cloth', 'Two Pockets', 'Belt Included'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Soft Throw Blanket',
    price: 1199,
    description:
      'A lightweight yet warm throw blanket perfect for layering on your sofa or bed. Crafted from sustainable cotton blend.',
    images: [
      'https://images.pexels.com/photos/6045083/pexels-photo-6045083.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6045084/pexels-photo-6045084.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Blankets',
    features: ['Sustainable Cotton', 'Machine Washable', 'All Season'],
    inStock: true,
  },
];

export const featuredProducts = products.slice(0, 3);
