import { type FC } from 'react';
import FadeIn from './FadeIn';

const tiers = [
  {
    name: 'Foundation',
    price: '$4,900',
    features: ['Market Gap Analysis', 'Brand Identity Kit', 'Seed Stage Prep', 'Advisor Network Access'],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$12,500',
    features: ['Venture Scaling Framework', 'Automated Ops Setup', 'Series A Strategy', 'Full Ecosystem Access'],
    popular: true,
  },
  {
    name: 'Legacy',
    price: 'Custom',
    features: ['Institutional Partnerships', 'Global M&A Advisory', 'Custom Venture Lab', 'Concierge Support'],
    popular: false,
  }
];

const Pricing: FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-16">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <FadeIn delay={200}>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Simple Pricing</h2>
          <p className="text-gray-400">Choose the level of engagement that fits your vision.</p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <FadeIn key={tier.name} delay={400 + index * 200}>
            <div className={`liquid-glass p-10 rounded-[2rem] border border-white/5 flex flex-col h-full relative ${tier.popular ? 'border-white/20' : ''}`}>
              {tier.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-white text-black text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-semibold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-gray-500 ml-2">/mo</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map(feature => (
                  <li key={feature} className="text-sm text-gray-400 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-medium transition-all ${tier.popular ? 'liquid-glass-strong hover:scale-[1.02]' : 'liquid-glass hover:bg-white/5'}`}>
                Get Started
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
