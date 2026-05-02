import { type FC } from 'react';
import FadeIn from './FadeIn';

const services = [
  {
    title: 'Strategic Advisory',
    description: 'Guiding visionaries through complex market landscapes with data-driven insights and radical foresight.',
  },
  {
    title: 'Venture Building',
    description: 'Transforming bold ideas into scalable, resilient businesses through our proprietary incubation framework.',
  },
  {
    title: 'Capital Deployment',
    description: 'Investing in high-conviction founders who are building the infrastructure of the next decade.',
  }
];

const WhatWeDo: FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mb-20">
        <FadeIn delay={200}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            We architect the <span className="italic">extraordinary</span>.
          </h2>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our approach combines the agility of a startup with the strategic depth of a global advisory firm. We don't just predict the future; we build it.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={600 + index * 200}>
            <div className="liquid-glass p-8 rounded-3xl border border-white/5 h-full flex flex-col hover:bg-white/5 transition-colors group">
              <h3 className="text-2xl font-medium mb-4 group-hover:translate-x-1 transition-transform">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
