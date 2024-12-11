import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicy = ({ open, onOpenChange }: PrivacyPolicyProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Политика конфиденциальности</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto text-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            1. Общие положения
          </h2>
          <p className="mt-2">
            1.1. Настоящая Политика конфиденциальности регулирует обработку и
            защиту персональных данных, предоставляемых пользователями настоящего сайта, осуществляемую Гонцовым
            Вячеславом Васильевичем (далее — «Оператор») в соответствии с
            законодательством о защите персональных данных.
          </p>
          <p className="mt-2">
            1.2. Используя Сайт, вы выражаете согласие с условиями настоящей
            Политики конфиденциальности. Если вы не согласны с ней, пожалуйста,
            воздержитесь от использования Сайта.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            2. Цели обработки персональных данных
          </h2>
          <p className="mt-2">
            2.1. Персональные данные, которые вы предоставляете, используются
            исключительно для:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Обратного звонка или связи с вами по указанному телефону.</li>
            <li>Назначения и проведения консультации.</li>
          </ul>
          <p className="mt-2">
            2.2. Мы не используем ваши данные для других целей без вашего явного
            согласия.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            3. Состав персональных данных
          </h2>
          <p className="mt-2">
            3.1. Мы обрабатываем только те персональные данные, которые вы
            добровольно предоставляете через формы на Сайте:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Полное имя.</li>
            <li>Телефонный номер.</li>
            <li>Адрес электронной почты (email).</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            4. Принципы обработки персональных данных
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li>Законности и справедливости.</li>
            <li>Ограничения обработки строго указанными целями.</li>
            <li>Минимизации обработки данных.</li>
            <li>Точности и актуальности данных.</li>
            <li>Обеспечения конфиденциальности и безопасности.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            5. Хранение и защита данных
          </h2>
          <p className="mt-2">
            5.1. Персональные данные пользователей хранятся только в течение
            времени, необходимого для выполнения указанных целей, но не более
            12 месяцев с момента их предоставления.
          </p>
          <p className="mt-2">
            5.2. Мы принимаем меры для защиты данных от несанкционированного
            доступа, изменения, раскрытия или уничтожения:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Используем защищенные каналы связи.</li>
            <li>
              Ограничиваем доступ к данным только для сотрудников, которым это
              необходимо.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            6. Передача данных третьим лицам
          </h2>
          <p className="mt-2">
            6.1. Ваши персональные данные не передаются третьим лицам, за
            исключением случаев:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Когда это требуется по закону.</li>
            <li>Когда вы дали явное согласие на передачу данных.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            7. Права пользователя
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              Запросить информацию о ваших персональных данных, которые мы
              обрабатываем.
            </li>
            <li>
              Потребовать исправления, обновления или удаления ваших данных.
            </li>
            <li>
              Отозвать свое согласие на обработку данных, связавшись с
              Оператором.
            </li>
            <li>
              Подать жалобу в уполномоченный орган по защите данных.
            </li>
          </ul>
          
          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            8. Контактная информация
          </h2>
          <p className="mt-2">
            Если у вас есть вопросы по обработке персональных данных или вы
            хотите реализовать свои права, свяжитесь с Оператором:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Имя: Гонцов Вячеслав Васильевич</li>
            <li>Email: nobrainer@yandex.ru</li>
            <li>Телефон: +7 999 456-84-91</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
