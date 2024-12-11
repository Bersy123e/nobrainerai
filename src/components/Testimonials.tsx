import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    step: '01',
    title: 'Анализ бизнеса',
    description: 'Детальное изучение процессов, брифинг и выявление точек роста.',
    duration: 'Длительность: 2-3 дня',
  },
  {
    step: '02',
    title: 'Разработка стратегии',
    description: 'Создание плана внедрения AI с учётом особенностей компании, актуализация рабочих процессов.',
    duration: 'Длительность: 5-7 дней',
  },
  {
    step: '03',
    title: 'Интеграция решений',
    description: 'Постепенное внедрение AI-решений в текущие бизнес-процессы без глобальных перемен в инструментах.',
    duration: 'Длительность: 10-14 дней',
  },
  {
    step: '04',
    title: 'Оптимизация',
    description: 'Настройка и улучшение работы системы, контроль качества рабочих процессов, замер KPI.',
    duration: 'Длительность: 10-15 дней',
  },
];

const testimonials = [
  {
    text: 'Внедрение AI-решений позволило нам сократить время обработки заказов на 70% и увеличить количество продаж акционных товаров на 65%.',
    author: 'Подорожник',
    results: 'Рост выручки на 18% за первый месяц',
  },
  {
    text: 'Автоматизация ответов в групповом чате наших курсов по йоге разгрузила наш персонал и нам теперь не нужен дополнительный человек в команду.',
    author: 'NamasteCamp',
    results: 'Экономия составит до 150 тысяч за каждый курс',
  },
  {
    text: 'Автоматизация записи клиентов на первичную консультацию по дизайну, позволила более точно выявить потребности клиентов и освободиться от работы с подрядчиками.',
    author: 'ClearDesign',
    results: 'Уменьшение фонда оплаты труда на 23%',
  },
];

const CombinedSection = () => {
  return (
    <section id="combined-section" className="py-20 bg-[#F8F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Процесс внедрения */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#1D3B33] text-center mb-8">
            Процесс внедрения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-white border border-[#D1C7B7] shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 flex flex-col text-left relative">
                  {/* Номер этапа */}
                  <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-[#D1C7B7] opacity-50">
                    {step.step}
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-lg font-serif font-semibold text-[#1D3B33] mb-4">
                    {step.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-[#4A4A4A] font-serif mb-4">
                    {step.description}
                  </p>

                  {/* Длительность */}
                  <p className="text-sm text-[#1D3B33] font-medium">
                    {step.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Отзывы клиентов */}
        <div id="testimonials">
          <h2 className="text-3xl font-serif font-bold text-[#1D3B33] text-center mb-8">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border border-[#D1C7B7] shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-[#4A4A4A] font-serif mb-6">
                    {testimonial.text}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[#1D3B33]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#1D3B33] mt-2">
                      {testimonial.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;
