import { z } from 'zod';

export const consultationFormSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  phone: z.string().regex(/^\+7\d{10}$/, 'Введите номер в формате +79991234567'),
  privacy: z.boolean().refine((val) => val === true, 'Необходимо принять условия'),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;