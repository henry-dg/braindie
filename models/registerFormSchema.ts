import { z } from 'zod'

export const formSchema = z.object({
  email: z.string().email('Please, give us a valid email.'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(50),
})
