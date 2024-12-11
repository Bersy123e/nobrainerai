import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    value: 15,
    suffix: '%',
    label: 'Средний рост конверсии',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Среднее увеличение прибыли',
  },
  {
    value: 25,
    suffix: '%',
    label: 'Сокращение затрат',
  },
  {
    value: 14,
    suffix: '',
    label: 'Дней для запуска',
  },
];

const Stats = () => {
  const [displayedValues, setDisplayedValues] = useState(
    stats.map(() => 0) // Изначально все значения 0
  );

  useEffect(() => {
    const durations = 2000; // Длительность анимации 2 секунды
    const steps = 60; // Количество шагов анимации
    const interval = durations / steps; // Интервал между шагами
    const increments = stats.map((stat) => stat.value / steps);

    let currentValues = stats.map(() => 0); // Текущие значения для каждой карточки
    let stepCount = 0;

    const timer = setInterval(() => {
      if (stepCount >= steps) {
        clearInterval(timer); // Остановка анимации, когда шаги закончились
        setDisplayedValues(stats.map((stat) => stat.value)); // Установка финальных значений
        return;
      }

      currentValues = currentValues.map(
        (value, index) => value + increments[index]
      );
      setDisplayedValues(currentValues.map(Math.floor)); // Обновление значений, округляем до целого числа
      stepCount++;
    }, interval);

    return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
  }, []);

  return (
    <section className="py-20 bg-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#1D3B33] mb-4">
            Ожидаемые результаты с автоматизацией на нейросетях
          </h2>
          <p className="text-[#4A4A4A] font-serif text-lg">
            Статистика, достигается с помощью наших решений, зависит от сферы
            применения и требует индивидуальной консультации
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white border border-[#D1C7B7] shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {/* Динамическое значение */}
                <div className="text-5xl font-serif font-bold text-[#1D3B33] mb-4">
                  {displayedValues[index]}
                  {stat.suffix}
                </div>
                {/* Лейбл */}
                <div className="text-[#4A4A4A] font-serif text-base">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
