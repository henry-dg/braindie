import { cn } from '@/lib/utils'
import MainNav from './main-nav'
import Link from 'next/link'

export default function DesktopHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'sticky top-0 flex w-full items-center space-x-16 px-8 py-4 shadow backdrop-blur',
        className,
      )}
    >
      <div className="text-2xl font-bold">
        <Link href="/">Braindie</Link>
      </div>
      <MainNav />
    </header>
  )
}
