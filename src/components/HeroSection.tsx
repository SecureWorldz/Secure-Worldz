import { type FC } from 'react';
import AnimatedHeading from './AnimatedHeading';
import FadeIn from './FadeIn';

const HeroSection: FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col">
      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-end">
          {/* Left Column */}
          <div className="flex flex-col">
            <AnimatedHeading
              text={"Shaping tomorrow\nwith vision and action."}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100">
                  Start a Chat
                </button>
                <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-white hover:text-black">
                  Explore Now
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="mt-12 lg:mt-0 flex items-end justify-start lg:justify-end">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light">
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
