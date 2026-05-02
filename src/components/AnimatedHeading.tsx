import { useEffect, useState, type FC } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

const AnimatedHeading: FC<AnimatedHeadingProps> = ({ text, className = '' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const charDelay = 30;
  const initialDelay = 200;
  
  const lines = text.split('\n');
  const maxLineLength = Math.max(...lines.map(line => line.length));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay = (lineIndex * maxLineLength * charDelay) + (charIndex * charDelay);
            return (
              <span
                key={charIndex}
                className="inline-block transition-all duration-500 ease-out"
                style={{
                  opacity: isAnimating ? 1 : 0,
                  transform: isAnimating ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
