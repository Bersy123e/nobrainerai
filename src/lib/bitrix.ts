import { toast } from 'sonner';

const BITRIX_WEBHOOK = 'https://b24-4ffbc7.bitrix24.ru/rest/1/0m1xd7flxgxt56px/crm.lead.add';

interface BitrixLeadData {
  name: string;
  email: string;
  phone: string;
}

export const createBitrixLead = async (data: BitrixLeadData) => {
  try {
    const response = await fetch(BITRIX_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          NAME: data.name,
          EMAIL: [{ VALUE: data.email, VALUE_TYPE: 'WORK' }],
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: 'WORK' }],
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке формы');
    }

    toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    return true;
  } catch (error) {
    toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    return false;
  }
};