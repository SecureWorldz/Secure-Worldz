import { type FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="px-6 md:px-12 lg:px-16 pt-6 w-full fixed top-0 z-50">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight">VEX</div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Story', 'Investing', 'Building', 'Advisory'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm transition-colors hover:text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100">
          Start a Chat
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
