// validationSchema.js
import { z } from 'zod';
import { subDays } from 'date-fns';

const today = new Date();
const now = new Date();

export const schema = z.object({
  name: z.string().min(4),
  dataNascimento: z.date({
    required_error: "Campo Obrigatório",
    invalid_type_error: "Data inválida",
  }).max(subDays(today, 0), { message: "Data de nascimento não pode ser futura" }),
  dataAgendamento: z.date({
    required_error: "Campo Obrigatório",
    invalid_type_error: "Data inválida",
  }).min(now, { message: "Data e horário de agendamento tem que ser igual ou posterior à data e hora atuais" }),
});
