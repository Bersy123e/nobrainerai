import { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Преимущества', href: '#benefits' },
    { label: 'Как это работает', href: '#faq' }, // Ссылка на FAQ
    { label: 'Отзывы', href: '#testimonials' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-[#F8F4F0] shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип без ссылки */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#1D3B33]" />
            <span className="font-serif text-xl text-[#1D3B33]">NobrainerAI</span>
          </div>

          {/* Навигация для десктопа */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#4A4A4A] hover:text-[#1D3B33] font-serif transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#consultation">
              <Button
                variant="default"
                className="bg-[#1D3B33] text-white font-serif hover:bg-[#2F4F3F]"
              >
                Получить консультацию
              </Button>
            </a>
          </div>

          {/* Кнопка меню для мобильных */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#4A4A4A] hover:text-[#1D3B33]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F4F0] border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-[#4A4A4A] hover:text-[#1D3B33] hover:bg-[#EDEAE6] font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consultation"
              className="block px-3 py-2 text-white bg-[#1D3B33] hover:bg-[#2F4F3F] font-serif text-center rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Получить консультацию
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
