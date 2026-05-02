import { type FC } from 'react';
import FadeIn from './FadeIn';

const products = [
  {
    name: 'VEX Pulse',
    tagline: 'Real-time market intelligence',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
  },
  {
    name: 'VEX Forge',
    tagline: 'Automated venture scaling',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=2832&auto=format&fit=crop',
  }
];

const Products: FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-16">
      <FadeIn delay={200}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Our Ecosystem</h2>
          <button className="liquid-glass-strong px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform">
            View All Products
          </button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {products.map((product, index) => (
          <FadeIn key={product.name} delay={400 + index * 200}>
            <div className="liquid-glass rounded-[2.5rem] overflow-hidden group border border-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                />
              </div>
              <div className="p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">{product.tagline}</p>
                <h3 className="text-3xl font-medium mb-6">{product.name}</h3>
                <button className="text-sm font-medium flex items-center gap-2 group/btn hover:gap-4 transition-all">
                  Learn more <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Products;
