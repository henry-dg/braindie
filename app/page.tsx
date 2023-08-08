import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <main className="text-slate-800">
      <section className="mx-auto max-w-2xl space-y-8 px-6 py-36 text-center">
        <h1 className="text-5xl font-bold leading-relaxed md:text-6xl">
          The platform built for Web developers
        </h1>
        <p className="text-sm text-slate-600 lg:text-lg">
          Created by a self-taught developers who wanted to help others to
          achieve success in the web development world.
        </p>
        <div className="flex justify-center space-x-2">
          <Link href="/register">
            <Button size="lg">Get Started</Button>
          </Link>
          <Button size="lg" variant="outline" className="border-slate-400">
            Learn More
          </Button>
        </div>
      </section>
      <Separator />
      <section className="mx-auto space-y-6 px-6 py-32 text-center">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Braindie anatomy
        </h2>
        <p className="text-slate-600 md:text-lg">
          Braindie can helps you refining your dev skills by using 3 its core
          modules.
        </p>
        <div className="mx-auto max-w-md space-y-4 text-start md:grid md:max-w-2xl md:grid-cols-anatomy md:gap-4 md:space-y-0 lg:max-w-5xl lg:gap-8">
          <div className="group w-full cursor-pointer space-y-2 rounded border border-slate-600 p-4 transition hover:bg-black/90">
            <h3 className="text-xl font-bold group-hover:text-white">
              I. Brainstormer
            </h3>
            <p className="group-hover:text-slate-200">
              This module helps to generate a lists of ideas of what you might
              want to build.
            </p>
          </div>
          <div className="group w-full cursor-pointer space-y-2 rounded border border-slate-600 p-4 transition hover:bg-black/90">
            <h3 className="text-xl font-bold group-hover:text-white">
              II. Formulator
            </h3>
            <p className="group-hover:text-slate-200">
              This module recommend techs to use and laying out basic steps to
              reach the goal.
            </p>
          </div>
          <div className="group w-full cursor-pointer space-y-2 rounded border border-slate-600 p-4 transition hover:bg-black/90 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold group-hover:text-white">
              III. Investigator
            </h3>
            <p className="group-hover:text-slate-200">
              The last module will be a partner who will go through the journey
              with you.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
