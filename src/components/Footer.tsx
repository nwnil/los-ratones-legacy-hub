import { Twitter, Instagram, Youtube, ShoppingBag } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-rat-dark py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/LosRatoneslol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rat-dark/80 hover:bg-emerald-500 border border-emerald-500/20 rounded-full px-6 py-3 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-emerald-500 group-hover:text-rat-dark transition-colors" />
              <span className="text-white group-hover:text-rat-dark font-medium transition-colors">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/los.ratoneslol/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rat-dark/80 hover:bg-emerald-500 border border-emerald-500/20 rounded-full px-6 py-3 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-emerald-500 group-hover:text-rat-dark transition-colors" />
              <span className="text-white group-hover:text-rat-dark font-medium transition-colors">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@LosRatonesOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rat-dark/80 hover:bg-emerald-500 border border-emerald-500/20 rounded-full px-6 py-3 transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 text-emerald-500 group-hover:text-rat-dark transition-colors" />
              <span className="text-white group-hover:text-rat-dark font-medium transition-colors">YouTube</span>
            </a>
            <a
              href="https://www.tiktok.com/@los.ratoneslol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rat-dark/80 hover:bg-emerald-500 border border-emerald-500/20 rounded-full px-6 py-3 transition-all duration-300 group"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-emerald-500 group-hover:text-rat-dark transition-colors"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="text-white group-hover:text-rat-dark font-medium transition-colors">TikTok</span>
            </a>
            <a
              href="https://www.losratones.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rat-dark/80 hover:bg-emerald-500 border border-emerald-500/20 rounded-full px-6 py-3 transition-all duration-300 group"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-500 group-hover:text-rat-dark transition-colors" />
              <span className="text-white group-hover:text-rat-dark font-medium transition-colors">Shop</span>
            </a>
          </div>
          <p className="text-white/60 text-sm">© 2024 Los Ratones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};