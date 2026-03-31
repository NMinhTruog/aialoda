import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleShopLinkClick = (e) => {
    if (location.pathname === '/shop') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-light tracking-tight text-gray-900">Aloda</span>
            <p className="mt-4 text-sm text-gray-600">
              Nen tang tu van da lieu va cham soc da theo dinh huong khoa hoc.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Giai phap
            </span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/shop" onClick={handleShopLinkClick} className="text-sm text-gray-600 hover:text-gray-900">Tat ca goi tu van</Link>
              </li>
              <li>
                <Link to="/shop" onClick={handleShopLinkClick} className="text-sm text-gray-600 hover:text-gray-900">Da mun</Link>
              </li>
              <li>
                <Link to="/shop" onClick={handleShopLinkClick} className="text-sm text-gray-600 hover:text-gray-900">Da nhay cam</Link>
              </li>
              <li>
                <Link to="/shop" onClick={handleShopLinkClick} className="text-sm text-gray-600 hover:text-gray-900">Hoat chat va routine</Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Thuong hieu
            </span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">Ve Aloda</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Lien he</Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-sm text-gray-600 hover:text-gray-900">
                  Chinh sach dat lich
                </Link>
              </li>
              <li>
                <Link to="/returns-policy" className="text-sm text-gray-600 hover:text-gray-900">
                  Chinh sach hoan huy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Ket noi
            </span>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">© 2025 Aloda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
