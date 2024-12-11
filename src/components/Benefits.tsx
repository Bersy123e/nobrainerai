import { Brain, TrendingUp, UserCheck, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: Brain,
    title: 'Умная автоматизация процессов',
    description:
      'Наши ИИ-боты самостоятельно обрабатывают заявки, квалифицируют лиды, проводят консультации и записывают клиентов, сокращая нагрузку на сотрудников и увеличивая точность на 95%.',
  },
  {
    icon: TrendingUp,
    title: 'Реальный рост конверсии и продаж',
    description:
      'Скорость обработки заявок увеличивается до 90%, что ведет к росту конверсии на 10-30%. За счёт мгновенных откликов на запросы клиенты не уходят к конкурентам, а ваш бизнес получает больше лидов.',
  },
  {
    icon: UserCheck,
    title: 'Оптимизация затрат на персонал',
    description:
      'Снижение затрат на менеджеров и сотрудников до 50%. ИИ берёт на себя рутинные задачи, позволяя вам перенаправить ресурсы на более важные и высокооплачиваемые функции.',
  },
  {
    icon: Clock,
    title: 'Быстрая интеграция и результаты',
    description:
      'Запуск системы происходит всего за 3-7 рабочих дней, а первые результаты, такие как улучшение качества обработки заявок и увеличение скорости, можно увидеть уже через 2 недели после внедрения.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-[#F8F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D3B33]">
            Преимущества внедрения ИИ в ваш бизнес
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white border border-[#D1C7B7] shadow-sm hover:shadow-lg transition-shadow flex flex-col items-stretch"
            >
              <CardContent className="p-6 flex flex-col items-center text-left">
                <div className="p-4 bg-[#E8E2D9] rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-[#1D3B33]" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#1D3B33] mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] font-serif leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
