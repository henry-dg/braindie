'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/models/registerFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <main className="mx-auto max-w-2xl px-4 pt-16 text-center text-slate-800 lg:text-start">
      <h1 className="mb-2 text-3xl font-bold">Get started with Braindie</h1>
      <p>
        Let&apos;s make the journey ahead more personalized and convenient by
        creating an account!
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-4 space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>

      <p className="font-light">
        Or{' '}
        <Link
          href="/login"
          className="text-slate-600 underline hover:font-bold"
        >
          Login,
        </Link>{' '}
        if you already join the gang.
      </p>
    </main>
  )
}
