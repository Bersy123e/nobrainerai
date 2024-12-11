import { useState } from 'react';
import { Brain, Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
}

const Footer = ({ onPrivacyClick }: FooterProps) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleTermsClick = () => {
    setIsTermsOpen(true);
  };

  const closeTerms = () => {
    setIsTermsOpen(false);
  };

  return (
    <>
      <footer className="bg-[#1D3B33] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Логотип и описание */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-[#D1C7B7]" />
                <span className="font-bold text-xl">NobrainerAI</span>
              </div>
              <p className="text-[#D1C7B7] leading-relaxed">
                Интегратор решений на базе искусственного интеллекта для бизнеса
              </p>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://t.me/millervai"
                    className="flex items-center text-[#D1C7B7] hover:text-[#E8E2D9] transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    t.me/millervai
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nobrainer@yandex.ru"
                    className="flex items-center text-[#D1C7B7] hover:text-[#E8E2D9] transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    nobrainer@yandex.ru
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+79994568491"
                    className="flex items-center text-[#D1C7B7] hover:text-[#E8E2D9] transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +7 999 456-84-91
                  </a>
                </li>
              </ul>
            </div>

            {/* Документы */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Документы</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={onPrivacyClick}
                    className="text-[#D1C7B7] hover:text-[#E8E2D9] transition-colors"
                  >
                    Политика конфиденциальности
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleTermsClick}
                    className="text-[#D1C7B7] hover:text-[#E8E2D9] transition-colors"
                  >
                    Пользовательское соглашение
                  </button>
                </li>
              </ul>
            </div>

            {/* О компании */}
            <div>
              <h3 className="font-semibold text-lg mb-4">О компании</h3>
              <p className="text-[#D1C7B7] leading-relaxed">
                Мы специализируемся на разработке и внедрении AI-решений,
                помогающих бизнесу автоматизировать процессы и увеличивать прибыль.
              </p>
            </div>
          </div>

          {/* Нижняя граница и копирайт */}
          <div className="border-t border-[#2F4F3F] mt-12 pt-8 text-center text-[#D1C7B7]">
            <p>&copy; {new Date().getFullYear()} NobrainerAI. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Popup для Пользовательского соглашения */}
      {isTermsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeTerms}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Пользовательское соглашение
            </h2>
            <div className="max-h-96 overflow-y-auto text-gray-700 text-sm leading-relaxed">
              {/* Содержание Пользовательского соглашения */}
              <p><strong>1. Общие положения</strong></p>
        <p>
          1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует порядок
          использования настоящего сайта (далее — «Сайт»), а также права и обязанности его
          пользователей и владельца.
        </p>
        <p>
          1.2. Настоящее Соглашение является публичной офертой. Используя Сайт, вы подтверждаете свое
          согласие с условиями данного Соглашения. Если вы не согласны с условиями, пожалуйста,
          воздержитесь от использования Сайта.
        </p>

        <p><strong>2. Основные термины</strong></p>
        <p>2.1. Владелец Сайта — Гонцов Вячеслав Васильевич (далее — «Оператор»).</p>
        <p>2.2. Пользователь — физическое лицо, посещающее Сайт и/или использующее его функционал.</p>
        <p>
          2.3. Контент — любая информация, опубликованная на Сайте, включая тексты, изображения,
          видео и другие материалы.
        </p>

        <p><strong>3. Условия использования Сайта</strong></p>
        <p>3.1. Пользователь обязуется:</p>
        <ul className="list-disc list-inside">
          <li>
            Использовать Сайт исключительно в соответствии с законодательством Российской
            Федерации.
          </li>
          <li>
            Не совершать действий, направленных на нарушение работы Сайта, включая попытки
            несанкционированного доступа к его функционалу.
          </li>
          <li>Не размещать на Сайте недостоверные, оскорбительные или незаконные сведения.</li>
        </ul>
        <p>3.2. Оператор имеет право:</p>
        <ul className="list-disc list-inside">
          <li>
            Изменять содержание Сайта, обновлять его функционал, временно или полностью
            приостанавливать доступ к Сайту без уведомления.
          </li>
          <li>
            Удалять пользовательские данные, нарушающие настоящее Соглашение или законодательство.
          </li>
        </ul>

        <p><strong>4. Права и обязанности Оператора</strong></p>
        <p>
          4.1. Оператор обязуется обеспечить конфиденциальность персональных данных в соответствии с
          Политикой конфиденциальности.
        </p>
        <p>4.2. Оператор не несет ответственности за:</p>
        <ul className="list-disc list-inside">
          <li>Временные сбои в работе Сайта.</li>
          <li>
            Ущерб, причинённый Пользователю в результате использования или невозможности
            использования Сайта.
          </li>
          <li>Достоверность информации, размещенной третьими лицами на Сайте.</li>
        </ul>

        <p><strong>5. Интеллектуальная собственность</strong></p>
        <p>
          5.1. Все объекты, размещенные на Сайте (логотипы, тексты, графика, элементы дизайна и
          прочее), принадлежат Оператору или третьим лицам, предоставившим права на их использование.
        </p>
        <p>
          5.2. Копирование, распространение, изменение или иное использование Контента без
          письменного согласия Оператора запрещено.
        </p>

        <p><strong>6. Персональные данные</strong></p>
        <p>
          6.1. При использовании Сайта Пользователь предоставляет персональные данные (ФИО, телефон,
          email) для целей связи, в соответствии с Политикой конфиденциальности.
        </p>
        <p>
          6.2. Оператор обрабатывает персональные данные в строгом соответствии с ФЗ-152 «О
          персональных данных».
        </p>

        <p><strong>7. Ответственность сторон</strong></p>
        <p>7.1. Пользователь несет ответственность за достоверность предоставляемых данных.</p>
        <p>
          7.2. Оператор не несет ответственности за действия третьих лиц, получивших доступ к
          персональным данным Пользователя вследствие несанкционированного доступа.
        </p>

        <p><strong>8. Изменение условий Соглашения</strong></p>
        <p>
          8.1. Оператор оставляет за собой право вносить изменения в настоящее Соглашение. Новая
          редакция вступает в силу с момента её публикации на Сайте.
        </p>
        <p>
          8.2. Продолжение использования Сайта после внесения изменений означает согласие
          Пользователя с обновленными условиями.
        </p>

        <p><strong>9. Контактные данные Оператора</strong></p>
        <p>Имя: Гонцов Вячеслав Васильевич</p>
        <p>Электронная почта: nobrainer@yandex.ru</p>
        <p>Телефон: +7 999 456-84-91</p>

        <p><strong>10. Заключительные положения</strong></p>
        <p>
          10.1. Настоящее Соглашение регулируется законодательством Российской Федерации.
        </p>
        <p>
          10.2. Все споры и разногласия, связанные с использованием Сайта, подлежат урегулированию в
          соответствии с законодательством РФ.
        </p>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={closeTerms}
                className="bg-[#1D3B33] text-white px-4 py-2 rounded hover:bg-[#2F4F3F] transition-all"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
