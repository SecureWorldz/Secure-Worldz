import { type FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="pt-32 pb-16 px-6 md:px-12 lg:px-16 border-t border-white/5 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="text-3xl font-bold tracking-tighter mb-8">VEX</div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Architecting the next generation of industry leaders. We turn vision into action through strategic advisory and venture building.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6">Ecosystem</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">VEX Pulse</a></li>
            <li><a href="#" className="hover:text-white transition-colors">VEX Forge</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Advisory</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
        <div>© 2026 VEX HOLDINGS. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
