import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex-1">
      <ul className="flex w-full space-x-6 text-sm">
        <li className="text-sm text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-900">
          <Link href="/">Home</Link>
        </li>
        <li className="text-sm text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-900">
          <Link href="/about">About</Link>
        </li>
        <li className="!ml-auto">
          <ul className="flex space-x-2">
            <li className="text-sm text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-900">
              <Link href="/login">Login</Link>
            </li>
            <li>/</li>
            <li className="text-sm text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-900">
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
