import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-[#FAF8F5] pt-20 pb-16 sm:pb-24">
      {/* Фоновое изображение с наложением */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-[#FAF8F5]/80" /> {/* Увеличили прозрачность наложения */}
      </div>

      {/* Контент */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1D3B33] leading-tight mb-6 drop-shadow-md">
          Умные решения для роста вашего бизнеса
        </h1>
        <p className="text-lg sm:text-xl text-[#1D3B33] font-serif max-w-3xl mx-auto mb-8 drop-shadow-md">
          Разработка ИИ-решений с гарантией эффективности. Увеличьте прибыль и снизьте затраты уже сегодня!
        </p>
        <Button
          size="lg"
          className="bg-[#1D3B33] text-white font-serif text-lg px-6 py-4 h-auto hover:bg-[#2F4F3F] transition-all"
          onClick={() =>
            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Записаться на консультацию
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
