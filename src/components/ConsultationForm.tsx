import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ConsultationFormFields } from '@/components/forms/ConsultationFormFields';
import { createBitrixLead } from '@/lib/bitrix';
import { consultationFormSchema, type ConsultationFormData } from '@/lib/validation';

interface ConsultationFormProps {
  onPrivacyClick: () => void;
}

const ConsultationForm = ({ onPrivacyClick }: ConsultationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      privacy: false,
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    const success = await createBitrixLead(data);
    if (success) {
      form.reset();
    }
    setIsSubmitting(false);
  };

  return (
    <section id="consultation" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-[#1D3B33]">
            Получить консультацию
          </h2>
          <p className="text-gray-600 font-serif text-base sm:text-lg mt-2">
            Заполните форму, и мы свяжемся с вами для обсуждения проекта
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-white shadow-lg rounded-lg p-8 border border-[#E0DED9]"
          >
            <ConsultationFormFields form={form} onPrivacyClick={onPrivacyClick} />
            <Button
              type="submit"
              className="w-full bg-[#1D3B33] text-white hover:bg-[#2F4F3F] transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Записаться на консультацию'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ConsultationForm;
