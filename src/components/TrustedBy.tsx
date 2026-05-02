import { type FC } from 'react';
import FadeIn from './FadeIn';

const companies = ['Aether', 'Chronos', 'Nebula', 'Quantum', 'Vertex', 'Zion'];

const TrustedBy: FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16">
      <FadeIn delay={200}>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">
            Trusted by organizations building the future
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {companies.map((company, index) => (
          <FadeIn key={company} delay={300 + index * 100}>
            <div className="liquid-glass flex items-center justify-center py-8 px-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 group">
              <span className="text-xl font-bold tracking-tighter text-white/40 group-hover:text-white transition-colors">
                {company}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
